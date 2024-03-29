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
      $description: String
      $contestantCount: Int
      $contestants: [ContestantInput]
      $editAccessCode: String
      $matches: [MatchInput]
      $setCount: Int
      $allowRegistration: Boolean
      $allowSelfScoring: Boolean
      $requireRegistrationApproval: Boolean
      $structure: String
      $createdBy: String
    ) {
      addTournament(
        newTournamentData: {
          name: $name
          description: $description
          contestantCount: $contestantCount
          contestants: $contestants
          editAccessCode: $editAccessCode
          matches: $matches
          setCount: $setCount
          allowRegistration: $allowRegistration
          allowSelfScoring: $allowSelfScoring
          requireRegistrationApproval: $requireRegistrationApproval
          structure: $structure
          createdBy: $createdBy
        }
      ) {
        _id
        name
        description
        linkCode
        createdOn
        contestantCount
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
