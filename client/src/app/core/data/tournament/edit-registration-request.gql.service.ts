import { Mutation, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class EditRegistrationRequestGQL extends Mutation<{
  editRegistrationRequest: ITournament;
}> {
  document = gql`
    mutation editRegistrationRequest(
      $requestId: ID!
      $tournamentId: ID!
      $isApproved: Boolean
    ) {
      editRegistrationRequest(
        requestId: $requestId
        tournamentId: $tournamentId
        isApproved: $isApproved
      ) {
        contestants {
          _id
          name
          seed
          points
          isRegistered
          profile {
            _id
            username
            imageUrl
          }
        }
        registrationRequests {
          _id
          isReviewed
          isApproved
          contestant {
            _id
            profile {
              _id
              username
            }
          }
        }
      }
    }
  `;
}
