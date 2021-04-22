import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { IUser } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class UserGQL extends Query<{ user: IUser }> {
  document = gql`
    query user($dId: String, $username: String) {
      user(dId: $dId, username: $username) {
        _id
        username
        email
        iconPublicAddress
        tournaments {
          _id
          name
          description
          createdOn
          linkCode
        }
      }
    }
  `;
}
