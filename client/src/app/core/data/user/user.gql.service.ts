import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { IUser } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class UserGQL extends Query<{ user: IUser }> {
  document = gql`
    query user($dId: String!) {
      user(dId: $dId) {
        _id
        dId
        username
        email
      }
    }
  `;
}
