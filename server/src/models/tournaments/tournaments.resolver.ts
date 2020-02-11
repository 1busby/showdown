import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';

import { NewTournamentInput } from './dto/new-tournament.input';
import { TournamentsArgs } from './dto/tournaments.args';
import { Tournament } from './tournament';
import { TournamentsService } from './tournaments.service';
import { UpdateTournamentInput } from './dto/update-tournament.input';

const pubSub = new PubSub();

@Resolver(of => Tournament)
export class TournamentsResolver {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Query(returns => Tournament)
  async tournament(@Args('id') id: string): Promise<Tournament> {
    const tournament = await this.tournamentsService.findOneById(id);
    if (!tournament) {
      throw new NotFoundException(id);
    }
    return tournament;
  }

  @Query(returns => Tournament)
  async tournamentFromLinkCode(@Args('linkCode') linkCode: string): Promise<Tournament> {
    const tournament = await this.tournamentsService.findOneByLinkCode(linkCode);
    if (!tournament) {
      throw new NotFoundException(linkCode);
    }
    return tournament;
  }

  @Query(returns => [Tournament])
  tournaments(@Args() tournamentsArgs: TournamentsArgs): Promise<Tournament[]> {
    return this.tournamentsService.findAll(tournamentsArgs);
  }

  @Mutation(returns => Tournament)
  async addTournament(@Args('newTournamentData') newTournamentData: NewTournamentInput): Promise<Tournament> {
    const tournament = await this.tournamentsService.create(newTournamentData);
    pubSub.publish('tournamentAdded', { tournamentAdded: tournament });
    return tournament;
  }

  @Mutation(returns => Boolean)
  async updateTournament(@Args('updateTournamentData') updateTournamentData: UpdateTournamentInput): Promise<boolean> {
    return this.tournamentsService.updateOne(updateTournamentData);
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
