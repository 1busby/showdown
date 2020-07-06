import { createUnionType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Team } from '../team/team.model';

export const ContestantUnion = createUnionType({
  name: 'Contestant', // the name of the GraphQL union
  types: () => [User, Team], // function that returns tuple of object types classes
});
