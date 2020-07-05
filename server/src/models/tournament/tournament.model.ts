import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { ITournament } from '../../../../shared/models/index';
import { Team } from '../team/team';
import { User } from '../user/user.model';
import { Contestant } from '../contestant/contestant.entity';

@ObjectType({ description: 'The tournament model' })
export class Tournament extends Document implements ITournament {
  @Field(type => ID)
  _id: string;

  @Field()
  name: string;

  @Field(type => Int)
  contestantCount: number;

  @Field(type => User, { nullable: true })
  createdBy?: User;

  @Field(type => [Contestant], { nullable: 'itemsAndList' })
  contestants?: Contestant[];

  @Field(type => [Team], { nullable: 'itemsAndList' })
  teams?: Team[];

  @Field({ nullable: true })
  createdOn?: Date;

  @Field({ nullable: true })
  updatedOn?: Date;

  @Field({ nullable: true })
  linkCode?: string;

  @Field({ nullable: true })
  editAccessCode?: string;

  anonymousContestants?: [];
}