import { Field, ID, ObjectType } from 'type-graphql';
import { IUser, ITeam } from '../../../../shared/models/index';

@ObjectType()
export class User implements IUser {
  @Field(type => ID)
  id: string;

  @Field()
  alias: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [ID])
  teams: string[];

  @Field({ nullable: true })
  createdOn: Date;

  @Field({ nullable: true })
  updatedOn: Date;
}
