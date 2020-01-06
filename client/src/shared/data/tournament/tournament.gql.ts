import gql from 'graphql-tag';

export const TournamentGqlFunctions = {
  mutations: {
    createTournament: gql`
      mutation {
        addTournament(
          newTournamentData: { name: "test 73", contestantCount: 14 }
        ) {
          id
          name
          contestantCount
        }
      }
    `
  }
};
