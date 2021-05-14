import {Query, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class TournamentsGQL extends Query<{ tournaments: [ITournament] }> {
  document = gql`
    query tournaments($skip: Int, $take: Int) {
      tournaments(skip: $skip, take: $take) {
        _id
        name
        createdOn
        linkCode
        createdBy {
          _id
          username
        }
      }
    }
  `;
}
