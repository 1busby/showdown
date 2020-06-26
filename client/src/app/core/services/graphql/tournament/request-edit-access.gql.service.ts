import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class RequestEditAccessGQL extends Query<{ canEdit: boolean }> {
  document = gql`
    query requestEditAccess($tournamentId: String $editAccessCode: String) {
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
