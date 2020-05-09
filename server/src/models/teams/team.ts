import { User } from '../users/user';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ITeam, IUser } from '../../../../shared/models/index';

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
  users?: IUser[];

  @Field()
  seed: number;
}
