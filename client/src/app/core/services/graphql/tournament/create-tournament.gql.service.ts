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
      $matches: [MatchInput]
      $setCount: Int
      $sets: [Set]
    ) {
      addTournament(
        newTournamentData: {
          name: $name
          contestantCount: $contestantCount
          contestants: $contestants
          editAccessCode: $editAccessCode
          matches: $matches
          setCount: $setCount
          sets: $sets
        }
      ) {
        _id
        linkCode
        createdOn
        contestants {
          _id
          seed
        }
        matches {
          _id
          matchNumber
        }
      }
    }
  `;
}
