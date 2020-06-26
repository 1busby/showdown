import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class CreateTournamentGQL extends Mutation<{ addTournament: ITournament }> {
  document = gql`
    mutation addTournament(
      $name: String!
      $contestantCount: Int
      $contestants: [ContestantInput]
      $editAccessCode: String
    ) {
      addTournament(
        newTournamentData: {
          name: $name
          contestantCount: $contestantCount
          contestants: $contestants
          editAccessCode: $editAccessCode
        }
      ) {
        _id
        linkCode
        createdOn
      }
    }
  `;
}
