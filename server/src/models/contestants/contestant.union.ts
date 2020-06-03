import { createUnionType } from 'type-graphql';
import { User } from '../users/user';
import { Team } from '../teams/team';

export const ContestantUnion = createUnionType({
  name: 'Contestant', // the name of the GraphQL union
  types: () => [User, Team], // function that returns tuple of object types classes
});
