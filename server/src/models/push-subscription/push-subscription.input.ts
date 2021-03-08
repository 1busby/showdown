import { Field, InputType } from '@nestjs/graphql';

import { IPushSubscription } from '@shared/index';

@InputType()
export class PushSubscriptionInput implements Partial<IPushSubscription> {
  @Field({ nullable: true })
  endpoint?: string;

  @Field({ nullable: true })
  expirationTime?: string;

  @Field({ nullable: true })
  encryptionKey?: string;

  @Field({ nullable: true })
  authSecret?: string;
}
