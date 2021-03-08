import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IUser } from '@shared/index';
import { Document } from 'mongoose';
import { Tournament } from '@models/tournament/tournament.model';
import { PushSubscription } from '@models/push-subscription/push-subscription.model';

@ObjectType({ description: 'The user model' })
export class User extends Document implements IUser {
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

  @Field(type => [Tournament], { nullable: 'itemsAndList' })
  tournaments?: Tournament[];

  @Field({ nullable: true })
  iconPublicAddress?: string;

  @Field({ nullable: true })
  createdOn?: Date;

  @Field({ nullable: true })
  updatedOn?: Date;

  @Field(type => PushSubscription, { nullable: true })
  pushSubscription?: PushSubscription;
}
