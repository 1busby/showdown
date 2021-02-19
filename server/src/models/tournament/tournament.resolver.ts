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

const pubSub = new PubSub();

@Resolver(of => Tournament)
export class TournamentsResolver {
  constructor(
    private logger: CustomLogger,
    private readonly tournamentsService: TournamentsService,
    private readonly matchService: MatchService,
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
    const tournament = await this.tournamentsService.create(newTournamentData);
    return tournament;
  }

  @Mutation(returns => Tournament)
  async updateTournament(
    @Args('updateTournamentData') updateTournamentData: UpdateTournamentInput,
  ): Promise<Tournament> {
    let updates = [];
    updateTournamentData.matches.forEach(match => {
      // check if match has a winner
      if (!match.winnerSeed) {
        let highseedSetsWon = 0,
          lowseedSetsWon = 0;
        match.sets.forEach(set => {
          if (set.outcome === 'high') {
            highseedSetsWon++;
          } else if (set.outcome === 'low') {
            lowseedSetsWon++;
          }
        });

        if (highseedSetsWon + lowseedSetsWon >= match.sets.length) {
          if (highseedSetsWon > lowseedSetsWon) {
            match.winnerSeed = 'HIGHSEED';
          } else {
            match.winnerSeed = 'LOWSEED';
          }

          updates.push({
            title: 'Match Won',
            description: 'A match has been won!',
          });
        }
      }
    });
    return this.tournamentsService.updateOne(updateTournamentData).then(res => {
      console.log('LOOK res ', res);
      return res;
    });
  }

  @Mutation(returns => Tournament)
  async runTournament(
    @Args('_id', { type: () => ID }) _id: string,
  ): Promise<Tournament> {
    console.log('LOOK tournament _id ', _id);
    return this.tournamentsService
      .updateOne({
        _id,
        hasStarted: true,
        updates: [
          {
            title: 'Showdown started!',
            description: 'Showdown has been started.',
            createdOn: Date.now(),
          },
        ],
      })
      .then(res => {
        console.log('LOOK res ', res);
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

  @Subscription(returns => Tournament)
  tournamentAdded() {
    return pubSub.asyncIterator('tournamentAdded');
  }
}
