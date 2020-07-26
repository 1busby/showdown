import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class RemoveContestantGQL extends Mutation {
  document = gql`
    mutation removeContestant($_id: ID!, $contestantId: ID) {
      removeContestant(
        _id: $id
        contestantId: $contestantId
      ) {
        _id
        contestants
      }
    }
  `;
}
