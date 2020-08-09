import { Mutation, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class EditTournamentGQL extends Mutation<{
  updateTournament: ITournament;
}> {
  document = gql`
    mutation updateTournament(
      $_id: ID!
      $name: String
      $description: String
      $contestantCount: Int
      $contestants: [ContestantInput]
      $matches: [MatchInput]
      $editAccessCode: String
      $setCount: Int
      $hasStarted: Boolean
      $allowRegistration: Boolean
      $allowSelfScoring: Boolean
      $structure: String
    ) {
      updateTournament(
        updateTournamentData: {
          _id: $_id
          name: $name
          description: $description
          contestantCount: $contestantCount
          contestants: $contestants
          matches: $matches
          editAccessCode: $editAccessCode
          setCount: $setCount
          hasStarted: $hasStarted
          allowRegistration: $allowRegistration
          allowSelfScoring: $allowSelfScoring
          structure: $structure
        }
      ) {
        _id
        name
        description
        linkCode
        contestantCount
        editAccessCode
        setCount
        hasStarted
        allowRegistration
        allowSelfScoring
        structure
      }
    }
  `;
}
