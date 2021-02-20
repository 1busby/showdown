import { Mutation, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { ITournament } from '@app/shared';

@Injectable({
  providedIn: 'root',
})
export class ReportMatchScoreGQL extends Mutation<{
  reportMatchScore: ITournament;
}> {
  document = gql`
    mutation reportMatchScore(
      $_id: ID!
      $tournamentId: ID
      $winnerSeed: String
      $matchNumber: Int
      $sets: [SetInput]
    ) {
      reportMatchScore(
        matchData: {
          _id: $_id
          tournamentId: $tournamentId
          winnerSeed: $winnerSeed
          matchNumber: $matchNumber
          sets: $sets
        }
      ) {
        _id
        name
        description
        linkCode
        contestantCount
        editAccessCode
        setCount
        hasStarted
        allowRegistration
        allowSelfScoring
        structure
        matches {
          _id
          winnerSeed
          matchNumber
          roundNumber
          highSeedNumber
          lowSeedNumber
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
        updates {
          _id
          title
          description
          createdOn
        }
      }
    }
  `;
}
