import { Mutation, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { IUser } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class EditUserGQL extends Mutation<{
  updateUser: IUser;
}> {
  document = gql`
    mutation updateUser(
      $_id: ID!
      $username: String
      $firstame: String
      $lastName: String
      $tournaments: [String]
    ) {
      updateUser(
        updateUserData: {
          _id: $_id
          username: $username
          firstame: $firstame
          lastName: $lastName
          tournaments: $tournaments
        }
      ) {
        _id
        tournaments {
          _id
        }
      }
    }
  `;
}
