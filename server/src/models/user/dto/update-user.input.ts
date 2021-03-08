import { MaxLength } from 'class-validator';
import { Field, InputType, ID } from '@nestjs/graphql';

import { PushSubscriptionInput } from '@models/push-subscription/push-subscription.input';

@InputType()
export class UpdateUserInput {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  @MaxLength(30)
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [String], { nullable: 'itemsAndList' })
  tournaments?: string[];

  @Field(type => PushSubscriptionInput, { nullable: true })
  pushSubscription?: PushSubscriptionInput;
}
