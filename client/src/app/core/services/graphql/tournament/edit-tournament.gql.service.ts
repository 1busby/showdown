import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class EditTournamentGQL extends Mutation<{ updateTournament: ITournament }> {
  document = gql`
    mutation updateTournament(
      $_id: ID!
      $name: String
      $contestantCount: Int
      $contestants: [ContestantInput]
      $matches: [MatchInput]
      $editAccessCode: String
    ) {
      updateTournament(
        updateTournamentData: {
          _id: $_id
          name: $name
          contestantCount: $contestantCount
          contestants: $contestants
          matches: $matches
          editAccessCode: $editAccessCode
        }
      ) {
        _id
        linkCode
      }
    }
  `;
}
