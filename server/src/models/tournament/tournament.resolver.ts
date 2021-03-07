import { NotFoundException, NotAcceptableException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ID,
} from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';

import { NewTournamentInput } from './dto/new-tournament.input';
import { TournamentsArgs } from './dto/tournament.args';
import { Tournament } from './tournament.model';
import { TournamentsService } from './tournament.service';
import { UpdateTournamentInput } from './dto/update-tournament.input';
import { RequestEditAccessInput } from './dto/request-edit-access.input';
import { EditAccessRequest } from './dto/edit-access-request';
import { MatchService } from '@models/match/match.service';
import { CustomLogger } from '@shared/index';
import { MatchInput } from '@models/match/dto/match.input';
import { Match } from '@models/match/match.model';
// import { UsersService } from '@models/user/user.service';

const pubSub = new PubSub();

@Resolver(of => Tournament)
export class TournamentsResolver {
  constructor(
    private logger: CustomLogger,
    private readonly tournamentsService: TournamentsService,
    private readonly matchService: MatchService,
    // private readonly userService: UsersService
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
        tournament = await this.tournamentsService.findOneById(id);
      } else if (linkCode) {
        tournament = await this.tournamentsService.findOneByLinkCode(linkCode);
      } else {
        throw new NotAcceptableException(
          null,
          'No link code or description found.',
        );
      }
      if (!tournament) {
        this.logger.info('LOOK tournement not found!');
        throw new NotFoundException('Tournament Not Found');
      }
      
      this.logger.info('LOOK found tournement ', tournament);
      tournament.contestants.sort((a, b) => a.seed - b.seed);

      return tournament;
    } catch (e) {
      this.logger.error('Error getting tournament becuase ', e);
    }
  }

  @Query(returns => [Tournament])
  tournaments(@Args() tournamentsArgs: TournamentsArgs): Promise<Tournament[]> {
    return this.tournamentsService.findAll(tournamentsArgs);
  }

  @Query(returns => EditAccessRequest)
  requestEditAccess(
    @Args('requestEditAccessInput')
    requestEditAccessInput: RequestEditAccessInput,
  ): Promise<EditAccessRequest> {
    return this.tournamentsService.handleEditAccessRequest(
      requestEditAccessInput,
    );
  }

  @Mutation(returns => Tournament)
  async addTournament(
    @Args('newTournamentData') newTournamentData: NewTournamentInput,
  ): Promise<Tournament> {
    return await this.tournamentsService.create(newTournamentData)
    // .then(tournament => {
    //   this.userService.updateOne({ _id: newTournamentData.createdBy, })
    //   return tournament
    // });
  }

  @Mutation(returns => Tournament)
  async updateTournament(
    @Args('updateTournamentData') updateTournamentData: UpdateTournamentInput,
  ): Promise<Tournament> {
    return this.tournamentsService.updateOne(updateTournamentData).then(res => {
      this.logger.log('LOOK res ' + res);
      return res;
    });
  }

  @Mutation(returns => Tournament)
  async runTournament(
    @Args('_id', { type: () => ID }) _id: string,
  ): Promise<Tournament> {
    this.logger.log('LOOK tournament _id ', _id);
    return this.tournamentsService
      .updateOne({
        _id,
        hasStarted: true,
        updates: [
          {
            title: 'Tournament started!',
            description: 'Tournament has been started.',
            createdOn: new Date(),
          },
        ],
      })
      .then(res => {
        this.logger.log('LOOK res ' + res);
        return res;
      });
  }

  @Mutation(returns => Tournament)
  joinTournament(
    @Args('id', { type: () => ID }) id: string,
    @Args('contestantName', { nullable: true }) contestantName?: string,
    @Args('userId', { nullable: true, type: () => ID }) userId?: string,
  ): Promise<Tournament> {
    return this.tournamentsService.addContestant(id, contestantName, userId);
  }

  @Mutation(returns => Tournament)
  removeContestant(
    @Args('_id', { type: () => ID }) _id: string,
    @Args('contestantId', { type: () => ID }) contestantId: string,
  ): Promise<Tournament> {
    return this.tournamentsService.removeContestant(_id, contestantId);
  }

  @Mutation(returns => Boolean)
  removeTournament(@Args('id') id: string) {
    return this.tournamentsService.remove(id);
  }

  @Mutation(returns => Tournament)
  reportMatchScore(@Args('matchData') matchData: MatchInput) {
    if (!matchData.tournamentId) {
      return 'No tournament ID received!';
    }

    return this.tournamentsService
      .findOneById(matchData.tournamentId)
      .then(tournament => {
        this.logger.log('LOOK Tournament fetched: ' + tournament);
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
            if (highseedSetsWon > lowseedSetsWon) {
              matchData.winnerSeed = 'HIGHSEED';
              updates.push({
                title: `Match ${matchData.matchNumber + 1} goes to {HighSeed}`,
                description: 'TODO match won description',
                createOn: currentDate
              });
            } else {
              matchData.winnerSeed = 'LOWSEED';
              updates.push({
                title: `Match ${matchData.matchNumber + 1} goes to {HighSeed}`,
                description: 'TODO match won description',
                createOn: currentDate
              });
            }
          }
        }
        return this.tournamentsService.updateOne({
          _id: matchData.tournamentId,
          matches: [matchData],
          updates,
        });
      })
      .then(res => {
        this.logger.log('LOOK res ' + res);
        return res;
      });
  }

  @Subscription(returns => Tournament)
  tournamentAdded() {
    return pubSub.asyncIterator('tournamentAdded');
  }
}
