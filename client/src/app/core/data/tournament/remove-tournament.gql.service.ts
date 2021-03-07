import { Mutation, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoveTournamentGQL extends Mutation {
  document = gql`
    mutation removeTournament($_id: ID!) {
      removeTournament(_id: $_id) 
    }
  `;
}
