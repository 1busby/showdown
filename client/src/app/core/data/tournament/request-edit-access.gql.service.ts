import { Query, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestEditAccessGQL extends Query<{ canEdit: boolean }> {
  document = gql`
    query requestEditAccess($tournamentId: String, $editAccessCode: String) {
      requestEditAccess(
        requestEditAccessInput: {
          tournamentId: $tournamentId
          editAccessCode: $editAccessCode
        }
      ) {
        canEdit
      }
    }
  `;
}
