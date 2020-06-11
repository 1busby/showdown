import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class JoinTournamentGQL extends Mutation {
  document = gql`
    mutation joinTournament($id: ID!, $contestantName: String, $userId: ID) {
      joinTournament(
        id: $id
        contestantName: $contestantName
        userId: $userId
      ) {
        id
        temporaryContestants
      }
    }
  `;
}
