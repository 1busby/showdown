import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';



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
      $setCount: Int
      $hasStarted: Boolean
    ) {
      updateTournament(
        updateTournamentData: {
          _id: $_id
          name: $name
          contestantCount: $contestantCount
          contestants: $contestants
          matches: $matches
          editAccessCode: $editAccessCode
          setCount: $setCount
          hasStarted: $hasStarted
        }
      ) {
        _id
        name
        linkCode
        contestantCount
        editAccessCode
        setCount
        hasStarted
      }
    }
  `;
}
