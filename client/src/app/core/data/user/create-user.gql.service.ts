// import { Injectable } from '@angular/core';
// import { Mutation } from 'apollo-angular';
// import gql from 'graphql-tag';

// import { IMission } from '@com';

// @Injectable({
//   providedIn: 'root',
// })
// export class CreateUserGQL extends Mutation<{ addMission: IMission }> {
//   document = gql`
//     mutation addMission(
//       $name: String!
//       $contestantCount: Int
//       $contestants: [ContestantInput]
//       $editAccessCode: String
//       $matches: [MatchInput]
//     ) {
//       addMission(
//         newMissionData: {
//           name: $name
//           contestantCount: $contestantCount
//           contestants: $contestants
//           editAccessCode: $editAccessCode
//           matches: $matches
//         }
//       ) {
//         _id
//         linkCode
//         createdOn
//         contestants {
//           _id
//           seed
//         }
//         matches {
//           _id
//           matchNumber
//         }
//       }
//     }
//   `;
// }
