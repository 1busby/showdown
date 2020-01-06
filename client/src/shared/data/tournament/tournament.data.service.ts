import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { TournamentGqlFunctions } from './tournament.gql';

@Injectable()
export class TournamentDataService {

  constructor(private apollo: Apollo) {}

  createTournament({name, contestantCount}) {
    this.apollo.mutate({
      mutation: TournamentGqlFunctions.mutations.createTournament,
      variables: {
        name,
        contestantCount
      }
    }).subscribe(result => {
      debugger
    });
  }
}