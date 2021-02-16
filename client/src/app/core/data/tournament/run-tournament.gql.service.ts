import { Mutation, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class RunTournamentGQL extends Mutation<{
  runTournament: ITournament;
}> {
  document = gql`
    mutation runTournament(
      $_id: ID!
    ) {
      runTournament(_id: $_id) {
        _id
        hasStarted
        updates {
          _id
          title
          description
          createdOn
        }
      }
    }
  `;
}
