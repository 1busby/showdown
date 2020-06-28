import { createUnionType } from 'type-graphql';
import { User } from '../user/user';
import { Team } from '../team/team';

export const ContestantUnion = createUnionType({
  name: 'Contestant', // the name of the GraphQL union
  types: () => [User, Team], // function that returns tuple of object types classes
});
