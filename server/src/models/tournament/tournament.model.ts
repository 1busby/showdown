import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { ITournament } from '@shared/index';
import { Team } from '@models/team/team.model';
import { User } from '@models/user/user.model';
import { Contestant } from '@models/contestant/contestant.model';
import { Match } from '@models/match/match.model';
import { Update } from '@models/update/update.model';
import { RegistrationRequest } from './registration-request.model';

@ObjectType({ description: 'The tournament model' })
export class Tournament extends Document implements ITournament {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

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

  @Field(type => [Update], { nullable: 'itemsAndList' })
  updates?: Update[];

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

  @Field({ nullable: true })
  isTeamBased?: boolean;

  @Field(type => Int, { nullable: true })
  teamSize?: number;

  @Field({ nullable: true })
  allowRegistration?: boolean;

  @Field({ nullable: true })
  allowSelfScoring?: boolean;

  @Field({ nullable: true })
  isComplete?: boolean;

  @Field({ nullable: true })
  requireRegistrationApproval?: boolean;

  @Field(type => [RegistrationRequest], { nullable: 'itemsAndList' })
  registrationRequests?: RegistrationRequest[];

  @Field({ nullable: true })
  structure?: 'single-elim' | 'double-elim' | 'round-robin';
}
