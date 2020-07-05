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

import { Match } from './match.model';
import { TournamentsService } from './match.service';

const pubSub = new PubSub();

@Resolver(of => Match)
export class TournamentsResolver {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Query(returns => Match)
  async tournament(
    @Args('id', { nullable: true }) id?: string,
    @Args('linkCode', { nullable: true }) linkCode?: string,
  ): Promise<Match> {

    let tournament;
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
    return tournament;
  }

  @Query(returns => [Match])
  tournaments(@Args() tournamentsArgs: TournamentsArgs): Promise<Match[]> {
    return this.tournamentsService.findAll(tournamentsArgs);
  }

  @Query(returns => EditAccessRequest)
  requestEditAccess(@Args('requestEditAccessInput') requestEditAccessInput: RequestEditAccessInput): Promise<EditAccessRequest> {
    return this.tournamentsService.handleEditAccessRequest(requestEditAccessInput);
  }

  @Mutation(returns => Match)
  async addTournament(
    @Args('newTournamentData') newTournamentData: NewTournamentInput,
  ): Promise<Match> {
    const tournament = await this.tournamentsService.create(newTournamentData);
    // pubSub.publish('tournamentAdded', { tournamentAdded: tournament });
    return tournament;
  }

  @Mutation(returns => Match)
  async updateTournament(
    @Args('updateTournamentData') updateTournamentData: UpdateTournamentInput,
  ): Promise<Match> {
    return this.tournamentsService.updateOne(updateTournamentData);
  }

  @Mutation(returns => Match)
  joinTournament(
    @Args('id', { type: () => ID }) id: string,
    @Args('contestantName', { nullable: true }) contestantName?: string,
    @Args('userId', { nullable: true, type: () => ID }) userId?: string,
  ): Promise<Match> {
    return this.tournamentsService.addContestant(id, contestantName, userId);
  }

  @Mutation(returns => Boolean)
  removeTournament(@Args('id') id: string) {
    return this.tournamentsService.remove(id);
  }

  @Subscription(returns => Match)
  tournamentAdded() {
    return pubSub.asyncIterator('tournamentAdded');
  }
}
