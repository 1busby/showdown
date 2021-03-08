import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { IPushSubscription } from '@shared/index';

@ObjectType({ description: 'A set for a match' })
export class PushSubscription extends Document implements IPushSubscription {
  @Field({ nullable: true })
  endpoint?: string;

  @Field({ nullable: true })
  expirationTime?: string;

  @Field({ nullable: true })
  encryptionKey?: string;

  @Field({ nullable: true })
  authSecret?: string;
}
