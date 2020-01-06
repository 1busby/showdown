import { Field, ID, ObjectType } from 'type-graphql';

import { Team } from '../teams/team';
import { IUser } from '../../../../shared/models/index';
import { Contestant } from '../contestants/contestant.interface';

@ObjectType({ description: 'The user model', implements: Contestant })
export class User implements IUser {
  // fields inherited from Contestant
  id: string;
  name: string;
  seed?: number;
  points?: number;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Team], { nullable: true })
  teams?: Team[];

  @Field({ nullable: true })
  createdOn: Date;

  @Field({ nullable: true })
  updatedOn: Date;
}
