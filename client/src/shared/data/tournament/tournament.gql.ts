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
        }
      }
    `
  },
  queries: {
    tournamentFromLinkCode: gql`
      query tournamentFromLinkCode($linkCode: String!) {
        tournamentFromLinkCode(linkCode: $linkCode) {
          id
          name
        }
      }
    `
  }
};
