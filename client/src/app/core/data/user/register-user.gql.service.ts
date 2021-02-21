import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { IUser } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserGQL extends Mutation<{ registerUser: Partial<IUser> }> {
  document = gql`
    mutation registerUser($username: String!, $dId: String!, $email: String!) {
      registerUser(newUserInput: {
        username: $username
        dId: $dId
        email: $email
      }) {
        _id
        dId
        username
        email
      }
    }
  `;
}
