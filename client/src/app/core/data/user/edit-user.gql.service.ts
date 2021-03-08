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
      $firstName: String
      $lastName: String
      $tournaments: [String]
      $pushSubscription: PushSubscriptionInput
    ) {
      updateUser(
        updateUserData: {
          _id: $_id
          username: $username
          firstName: $firstName
          lastName: $lastName
          tournaments: $tournaments
          pushSubscription: $pushSubscription
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
