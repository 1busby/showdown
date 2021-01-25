import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { IUser } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class SigninGQL extends Mutation<{ signin: Partial<IUser> }> {
  document = gql`
    mutation signin($username: String!) {
      signin(signinInput: {
        username: $username
      }) {
        _id
        username
        email
      }
    }
  `;
}
