import gql from 'graphql-tag';

export const TournamentGqlFunctions = {
  mutations: {
    createTournament: gql`
      mutation addTournament($name: String!, $contestantCount: Int!) {
        addTournament(
          newTournamentData: { name: $name, contestantCount: $contestantCount }
        ) {
          id
          name
          contestantCount
          linkCode
          createdOn
        }
      }
    `
  },
  queries: {
    tournamentFromId: gql`
      query tournamentFromLinkCode($linkCode: String!) {
        tournamentFromLinkCode(linkCode: $linkCode) {
          id
          name
          contestantCount
          linkCode
          createdOn
        }
      }
    `,
    tournamentFromLinkCode: gql`
      query tournamentFromLinkCode($linkCode: String!) {
        tournamentFromLinkCode(linkCode: $linkCode) {
          id
          name
          contestantCount
          linkCode
          createdOn
        }
      }
    `,
    tournaments: gql`
      query tournaments($skip: Int, $take: Int) {
        tournaments(skip: $skip, take: $take ) {
          id
          name
          createdOn
        }
      }
    `
  }
};
