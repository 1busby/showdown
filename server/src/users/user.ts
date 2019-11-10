import { Team } from './../teams/team';
import { Field, ID, ObjectType } from 'type-graphql';
import { IUser } from '../../../shared/models/index';

@ObjectType({ description: 'The user model' })
export class User implements IUser {
  @Field(type => ID)
  id: string;

  @Field()
  alias: string;

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
