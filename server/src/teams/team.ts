import { User } from './../users/user';
import { Field, ID, ObjectType } from 'type-graphql';
import { ITeam } from '../../../shared/models/index';

@ObjectType()
export class Team implements ITeam {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  createdOn: Date;

  @Field()
  updatedOn: Date;

  @Field(type => User, { nullable: true })
  users?: User[];

  @Field()
  seed: number;
}
