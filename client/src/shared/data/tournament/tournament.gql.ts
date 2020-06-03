import gql from 'graphql-tag';

export const TournamentGqlFunctions = {
  mutations: {
    createTournament: gql`
      mutation addTournament($name: String!, $contestantCount: Int!, $temporaryContestants: [String]) {
        addTournament(
          newTournamentData: { name: $name, contestantCount: $contestantCount, temporaryContestants: $temporaryContestants }
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
    tournament: gql`
      query tournament($id: String, $linkCode: String) {
        tournament(id: $id, linkCode: $linkCode) {
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
          linkCode
        }
      }
    `
  }
};
