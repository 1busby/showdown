import {Query, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';



import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class TournamentGQL extends Query<{ tournament: ITournament }> {
  document = gql`
    query tournament($id: String, $linkCode: String) {
      tournament(id: $id, linkCode: $linkCode) {
        _id
        name
        contestantCount
        linkCode
        createdOn
        setCount
        hasStarted
        contestants {
          _id
          name
          seed
          points
          isRegistered
        }
        matches {
          _id
          matchNumber
          roundNumber
          highSeedNumber
          lowSeedNumber
          winnerSeed
          sets {
            _id
            orderNumber
            highSeedScore
            lowSeedScore
            outcome
            startedOn
            completedOn
            notes
          }
        }
      }
    }
  `;
}
