import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { ITournament } from '@shared/index';
import { Team } from '../team/team.model';
import { User } from '../user/user.model';
import { Contestant } from '../contestant/contestant.entity';
import { Match } from '../match/match.model';

@ObjectType({ description: 'The tournament model' })
export class Tournament extends Document implements ITournament {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Int, { nullable: true })
  contestantCount?: number;

  @Field(type => User, { nullable: true })
  createdBy?: User;

  @Field(type => [Contestant], { nullable: 'itemsAndList' })
  contestants?: Contestant[];

  @Field(type => [Team], { nullable: 'itemsAndList' })
  teams?: Team[];

  @Field(type => [Match], { nullable: 'itemsAndList' })
  matches?: Match[];

  @Field({ nullable: true })
  createdOn?: Date;

  @Field({ nullable: true })
  updatedOn?: Date;

  @Field({ nullable: true })
  linkCode?: string;

  @Field({ nullable: true })
  editAccessCode?: string;

  @Field(type => Int, { nullable: true })
  setCount?: number;

  @Field({ nullable: true })
  hasStarted?: boolean;

  anonymousContestants?: [];
}
