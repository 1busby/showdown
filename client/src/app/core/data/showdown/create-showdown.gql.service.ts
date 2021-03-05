import { Mutation, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { IShowdown } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class CreateShowdownGQL extends Mutation<{ addShowdown: IShowdown }> {
  document = gql`
    mutation addShowdown(
      $challenger: ID
      $defender: ID
      $expiresOn: Date
      $setCount: Int
      $wager: Float
    ) {
      addShowdown(
        newShowdownData: {
          challenger: $challenger
          defender: $defender
          expiresOn: $expiresOn
          setCount: $setCount
          wager: $wager
        }
      ) {
        _id
        linkCode
      }
    }
  `;
}
