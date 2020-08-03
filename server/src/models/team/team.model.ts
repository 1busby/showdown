import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ITeam, IUser } from '@shared/index';
import { User } from '../user/user.model';

@ObjectType()
export class Team implements ITeam {
  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  createdOn: Date;

  @Field()
  updatedOn: Date;

  @Field(type => User, { nullable: true })
  users?: IUser[];

  @Field()
  seed: number;
}
