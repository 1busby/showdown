import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewTournamentInput } from './dto/new-tournament.input';
import { TournamentsArgs } from './dto/tournaments.args';
import { Tournament } from './tournament';
import { TournamentsService } from './tournaments.service';

const pubSub = new PubSub();

@Resolver(of => Tournament)
export class TournamentsResolver {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Query(returns => Tournament)
  async user(@Args('id') id: string): Promise<Tournament> {
    const tournament = await this.tournamentsService.findOneById(id);
    if (!tournament) {
      throw new NotFoundException(id);
    }
    return tournament;
  }

  @Query(returns => [Tournament])
  users(@Args() tournamentsArgs: TournamentsArgs): Promise<Tournament[]> {
    return this.tournamentsService.findAll(tournamentsArgs);
  }

  @Mutation(returns => Tournament)
  async addTournament(@Args('newTournamentData') newTournamentData: NewTournamentInput): Promise<Tournament> {
    const tournament = await this.tournamentsService.create(newTournamentData);
    pubSub.publish('tournamentAdded', { userAdded: tournament });
    return tournament;
  }

  @Mutation(returns => Boolean)
  async removeTournament(@Args('id') id: string) {
    return this.tournamentsService.remove(id);
  }

  @Subscription(returns => Tournament)
  tournamentAdded() {
    return pubSub.asyncIterator('tournamentAdded');
  }
}
