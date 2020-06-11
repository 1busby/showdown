import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class CreateTournamentGQL extends Mutation<ITournament> {
  document = gql`
    mutation addTournament(
      $name: String!
      $contestantCount: Int!
      $temporaryContestants: [String]
    ) {
      addTournament(
        newTournamentData: {
          name: $name
          contestantCount: $contestantCount
          temporaryContestants: $temporaryContestants
        }
      ) {
        id
        name
        contestantCount
        linkCode
        createdOn
      }
    }
  `;
}
