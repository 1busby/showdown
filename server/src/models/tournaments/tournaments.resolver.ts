import { NotFoundException, NotAcceptableException } from '@nestjs/common';
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
  async tournament(
    @Args('id', { nullable: true }) id?: string,
    @Args('linkCode', { nullable: true }) linkCode?: string,
  ): Promise<Tournament> {
    console.log('tournamentFromLinkCode called!');

    let tournament;
    if (id) {
      tournament = await this.tournamentsService.findOneById(id);
    } else if (linkCode) {
      tournament = await this.tournamentsService.findOneByLinkCode(linkCode);
    } else {
      throw new NotAcceptableException(null, 'No link code or description found.');
    }
    if (!tournament) {
      throw new NotFoundException('Tournament Not Found');
    }
    return tournament;
  }

  @Query(returns => [Tournament])
  tournaments(@Args() tournamentsArgs: TournamentsArgs): Promise<Tournament[]> {
    console.log('tournaments called!');
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
