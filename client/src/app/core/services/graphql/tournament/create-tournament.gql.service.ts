import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';



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
    ) {
      addTournament(
        newTournamentData: {
          name: $name
          contestantCount: $contestantCount
          contestants: $contestants
          editAccessCode: $editAccessCode
          matches: $matches
          setCount: $setCount
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
