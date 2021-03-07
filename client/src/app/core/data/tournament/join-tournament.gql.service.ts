import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JoinTournamentGQL extends Mutation {
  document = gql`
    mutation joinTournament($_id: ID!, $contestantName: String, $userId: ID) {
      joinTournament(
        _id: $_id
        contestantName: $contestantName
        userId: $userId
      ) {
        _id
        contestants {
          _id
        }
      }
    }
  `;
}
