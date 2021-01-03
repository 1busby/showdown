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
} from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';

import { NewTournamentInput } from './dto/new-tournament.input';
import { TournamentsArgs } from './dto/tournament.args';
import { Tournament } from './tournament.model';
import { TournamentsService } from './tournament.service';
import { UpdateTournamentInput } from './dto/update-tournament.input';
import { RequestEditAccessInput } from './dto/request-edit-access.input';
import { EditAccessRequest } from './dto/edit-access-request';
import { Match } from '@models/match/match.model';
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
    return this.tournamentsService.updateOne(updateTournamentData);
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
