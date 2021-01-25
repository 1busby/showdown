import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class RemoveContestantGQL extends Mutation {
  document = gql`
    mutation removeContestant($_id: ID!, $contestantId: ID!) {
      removeContestant(
        _id: $_id
        contestantId: $contestantId
      ) {
        _id
        name
      }
    }
  `;
}
