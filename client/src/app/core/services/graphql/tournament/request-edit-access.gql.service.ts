import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class RequestEditAccessGQL extends Query<{ tournaments: [ITournament] }> {
  document = gql`
    query requestEditAccess($tournamentId: String $editAccessCode: String) {
      requestEditAccess(tournamentId: $tournamentId, editAccessCode: $editAccessCode) {
        canEdit
      }
    }
  `;
}

