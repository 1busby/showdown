import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Team } from '../team/team.model';
import { IUser } from '@shared/index';
import { Document } from 'mongoose';
import { Contestant } from '../contestant/contestant.entity';
import { Tournament } from '@models/tournament/tournament.model';

@ObjectType({ implements: [Contestant], description: 'The user model' })
export class User extends Document implements IUser, Contestant {
  @Field(type => ID)
  _id: string;

  @Field(type => ID)
  dId: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Team], { nullable: 'itemsAndList' })
  teams?: Team[];

  @Field(type => [Tournament], { nullable: 'itemsAndList' })
  tournaments?: Tournament[];

  @Field({ nullable: true })
  iconPublicAddress?: string;

  @Field({ nullable: true })
  createdOn?: Date;

  @Field({ nullable: true })
  updatedOn?: Date;

  isRegistered?: boolean;
  // fields inherited from Contestant
  eventId?: string;

  name?: string;

  seed?: number;

  points?: number;
}
