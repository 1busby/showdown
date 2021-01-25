import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { IUser } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class UserGQL extends Query<{ user: IUser }> {
  document = gql`
    query user($id: String!) {
      user(_id: $id) {
        _id
        username
      }
    }
  `;
}
