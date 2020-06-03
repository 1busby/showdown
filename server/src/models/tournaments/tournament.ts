import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { ITournament } from '../../../../shared/models/index';
import { Team } from '../teams/team';
import { User } from '../users/user';

@ObjectType({ description: 'The tournament model' })
export class Tournament extends Document implements ITournament {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => Int)
  contestantCount: number;

  @Field(type => User, { nullable: true })
  createdBy: User;

  @Field(type => [User], { nullable: 'itemsAndList' })
  contestants: User[];

  @Field(type => [String], { nullable: 'itemsAndList' })
  temporaryContestants: string[];

  @Field(type => [Team], { nullable: 'itemsAndList' })
  teams: Team[];

  @Field({ nullable: true })
  createdOn: Date;

  @Field({ nullable: true })
  updatedOn: Date;

  @Field({ nullable: true })
  linkCode: string;
}
