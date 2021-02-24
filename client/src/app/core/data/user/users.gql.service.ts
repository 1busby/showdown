import {Query, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';



import { IUser } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class UsersGQL extends Query<{ users: [IUser] }> {
  document = gql`
    query users($skip: Int, $take: Int) {
      users(skip: $skip, take: $take) {
        _id
        username
      }
    }
  `;
}
