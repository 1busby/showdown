import {Mutation, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';



import { IShowdown } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class CreateShowdownGQL extends Mutation<{ addChallenge: IShowdown }> {
  document = gql`
    mutation addChallenge(
      $challenger: String
      $defender: String
      $expiresOn: Date
      $setCount: Int
    ) {
      addChallenge(
        newChallengeData: {
          challenger: $challenger
          defender: $defender
          expiresOn: $expiresOn
          setCount: $setCount
        }
      ) {
        _id
        linkCode
      }
    }
  `;
}
