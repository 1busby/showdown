import { NotFoundException, NotAcceptableException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ID,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';

import { NewTournamentInput } from './dto/new-tournament.input';
import { TournamentsArgs } from './dto/tournament.args';
import { Tournament } from './tournament.model';
import { TournamentService } from './tournament.service';
import { UpdateTournamentInput } from './dto/update-tournament.input';
import { RequestEditAccessInput } from './dto/request-edit-access.input';
import { EditAccessRequest } from './dto/edit-access-request';
import { CustomLogger } from '@shared/index';
import { MatchInput } from '@models/match/dto/match.input';
import { WebPushService } from '@shared/services/web-push.service';
import { UserService } from '@models/user/user.service';
import { Contestant } from '@models/contestant/contestant.model';

const pubSub = new PubSub();

@Resolver(of => Tournament)
export class TournamentResolver {
  constructor(
    private logger: CustomLogger,
    private readonly tournamentService: TournamentService,
    private readonly userService: UserService,
    private webPushService: WebPushService,
  ) {}

  @Query(returns => Tournament)
  async tournament(
    @Args('id', { nullable: true }) id?: string,
    @Args('linkCode', { nullable: true }) linkCode?: string,
  ): Promise<Tournament> {
    this.logger.info(
      'LOOK getting tournament id or linkCode = ',
      id || linkCode,
    );
    try {
      let tournament: Tournament;
      if (id) {
        tournament = await this.tournamentService.findOneById(id);
      } else if (linkCode) {
        tournament = await this.tournamentService.findOneByLinkCode(linkCode);
      } else {
        throw new NotAcceptableException(
          null,
          'No link code or description found.',
        );
      }
      if (!tournament) {
        throw new NotFoundException('Tournament Not Found');
      }
      tournament.contestants.sort((a, b) => a.seed - b.seed);

      this.logger.log('LOOK returning tournament ', tournament.toJSON());

      return tournament.toJSON();
    } catch (e) {
      this.logger.error('Error getting tournament becuase ', e);
    }
  }

  @Query(returns => [Tournament])
  tournaments(@Args() tournamentsArgs: TournamentsArgs): Promise<Tournament[]> {
    // this.webPushService.sendNotification();
    return this.tournamentService.findAll(tournamentsArgs);
  }

  @Query(returns => EditAccessRequest)
  requestEditAccess(
    @Args('requestEditAccessInput')
    requestEditAccessInput: RequestEditAccessInput,
  ): Promise<EditAccessRequest> {
    return this.tournamentService.handleEditAccessRequest(
      requestEditAccessInput,
    );
  }

  @Mutation(returns => Tournament)
  async addTournament(
    @Args('newTournamentData') newTournamentData: NewTournamentInput,
  ): Promise<Tournament> {
    return await this.tournamentService.create(newTournamentData);
    // .then(tournament => {
    //   this.userService.updateOne({ _id: newTournamentData.createdBy, })
    //   return tournament
    // });
  }

  @Mutation(returns => Tournament)
  async updateTournament(
    @Args('updateTournamentData') updateTournamentData: UpdateTournamentInput,
  ): Promise<Tournament> {
    return this.tournamentService.updateOne(updateTournamentData).then(res => {
      return res;
    });
  }

  @Mutation(returns => Tournament)
  async runTournament(
    @Args('_id', { type: () => ID }) _id: string,
  ): Promise<Tournament> {
    const notification = {
      title: 'Tournament started!',
      // description: 'Tournament has been started.',
      createdOn: new Date(),
    };
    return this.tournamentService
      .updateOne({
        _id,
        hasStarted: true,
        updates: [notification],
      })
      .then(res => {
        this.webPushService.sendNotification(
          res.contestants
            .filter(c => !!c.profile)
            .map(c => {
              return JSON.parse(c.profile.pushSubscription);
            }),
          `${res.name} has started!`,
          `The Showdown begins`,
        );
        return res;
      });
  }

  @Mutation(returns => Tournament)
  async joinTournament(
    @Args('_id', { type: () => ID }) _id: string,
    @Args('contestantName', { nullable: true }) contestantName?: string,
    @Args('userId', { nullable: true, type: () => ID }) userId?: string,
    @Args('seed', { nullable: true, type: () => Int }) seed?: number,
  ): Promise<Tournament> {
    const tournament = await this.tournamentService.findOneById(_id);
    if (tournament.requireRegistrationApproval) {
      let existingRequestIndex = tournament.registrationRequests.findIndex(
        request => {
          return (
            request.contestant.name === contestantName ||
            request.contestant.profile.id === userId
          );
        },
      );

      if (existingRequestIndex >= 0) {
        // LOOK TODO: return useful message
        throw new Error();
      } else {
        return this.tournamentService.addRegistrationRequest(_id, {
          contestant: {
            profile: userId,
            name: contestantName,
          },
        });
      }
    } else {
      let existingContestantIndex = tournament.contestants.findIndex(
        contestant => {
          return (
            contestant.name === contestantName ||
            contestant.profile.id === userId
          );
        },
      );

      if (existingContestantIndex >= 0) {
        // LOOK TODO: return useful message
        throw new Error();
      } else {
        return this.tournamentService.addContestant(
          _id,
          seed,
          contestantName,
          userId,
        );
      }
    }
  }

  @Mutation(returns => Tournament)
  removeContestant(
    @Args('_id', { type: () => ID }) _id: string,
    @Args('contestantId', { type: () => ID }) contestantId: string,
  ): Promise<Tournament> {
    return this.tournamentService.removeContestant(_id, contestantId);
  }

  @Mutation(returns => Boolean)
  removeTournament(@Args('_id', { type: () => ID }) _id: string) {
    return this.tournamentService.remove(_id);
  }

  @Mutation(returns => Tournament)
  reportMatchScore(@Args('matchData') matchData: MatchInput) {
    if (!matchData.tournamentId) {
      return 'No tournament ID received!';
    }

    return this.tournamentService
      .findOneById(matchData.tournamentId)
      .then(tournament => {
        const match = tournament.matches.find(
          m => m.matchNumber === matchData.matchNumber,
        );
        const updates = [];
        // const match =
        // check if match has a winner
        if (!matchData.winnerSeed) {
          let highseedSetsWon = 0;
          let lowseedSetsWon = 0;
          matchData.sets.forEach(set => {
            if (set.outcome === 'high') {
              highseedSetsWon++;
            } else if (set.outcome === 'low') {
              lowseedSetsWon++;
            }
          });

          if (highseedSetsWon + lowseedSetsWon >= matchData.sets.length) {
            const currentDate = new Date();
            const lowSeed = matchData.lowSeedNumber;
            const lowSeedContestant = tournament.contestants.find(
              c => c.seed === lowSeed,
            );
            const highSeed = matchData.highSeedNumber;
            const highSeedContestant = tournament.contestants.find(
              c => c.seed === highSeed,
            );
            let winner;
            let loser;
            const nextRound = matchData.roundNumber + 1;
            if (highseedSetsWon > lowseedSetsWon) {
              matchData.winnerSeed = 'HIGHSEED';
              winner = highSeedContestant;
              loser = lowSeedContestant;
            } else {
              matchData.winnerSeed = 'LOWSEED';
              winner = lowSeedContestant;
              loser = highSeedContestant;
            }

            // If this is the last match
            if (matchData.matchNumber === tournament.matches.length) {
              updates.push({
                title: `Tournament Complete`,
                description: `${winner.name} defeated ${loser.name} to win the Tournament!`,
                createdOn: currentDate,
              });

              if (winner.email) {
                this.userService.incrementWins(winner._id);
              }
            } else {
              updates.push({
                title: `Match Complete`,
                description: `${winner.name} defeated ${loser.name} and will move on to Round ${nextRound}`,
                createdOn: currentDate,
              });
            }
          }
        }
        return this.tournamentService.updateOne({
          _id: matchData.tournamentId,
          matches: [matchData],
          updates,
        });
      })
      .then(res => {
        return res;
      });
  }

  @Mutation(returns => Tournament)
  async editRegistrationRequest(
    @Args('requestId', { type: () => ID }) requestId: string,
    @Args('tournamentId', { type: () => ID }) tournamentId: string,
    @Args('isApproved', { nullable: true }) isApproved: boolean,
  ): Promise<Tournament> {
    const tournament = await this.tournamentService.findOneById(tournamentId);
    // TODO send notification to user
    const request = tournament.registrationRequests.find(
      request => {
        const id = request._id;
        console.log('1234');
        return request._id == requestId
      }
    );

    let seed = 0;
    for (let i = 1; i <= tournament.contestantCount; i++) {
      const alreadySeededContestant = tournament.contestants.find(
        cont => cont.seed === i,
      );
      if (!alreadySeededContestant) {
        seed = i;
        break;
      }
    }

    const addContestantArgs = [tournamentId, seed];

    if (request.contestant.profile._id) {
      addContestantArgs.push(undefined);
      addContestantArgs.push(request.contestant.profile._id);
    } else {
      addContestantArgs.push(request.contestant.name);
      addContestantArgs.push(undefined);
    }

    return this.tournamentService
      .addContestant(
        addContestantArgs[0],
        addContestantArgs[1],
        addContestantArgs[2],
        addContestantArgs[3],
      )
      .then(res => {
        return this.tournamentService.updateOne({
          _id: tournamentId,
          registrationRequests: [
            {
              _id: requestId,
              isApproved,
              isReviewed: true,
            },
          ],
        });
      });
  }

  @Subscription(returns => Tournament)
  tournamentAdded() {
    return pubSub.asyncIterator('tournamentAdded');
  }
}
