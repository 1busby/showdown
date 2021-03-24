import { Query, gql } from 'apollo-angular';
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
        description
        contestantCount
        linkCode
        createdOn
        setCount
        hasStarted
        allowRegistration
        allowSelfScoring
        requireRegistrationApproval
        structure
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
        matches {
          ...allFields
        }
        updates {
          _id
          title
          description
          createdOn
        }
        createdBy {
          _id
        }
      }
    }

    fragment allFields on Match {
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
  `;
}
