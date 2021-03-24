import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IRegistrationRequest } from '@shared/index';
import { Contestant } from '@models/contestant/contestant.model';

@ObjectType({ description: '' })
export class RegistrationRequest implements IRegistrationRequest {
  @Field(type => ID)
  _id: string;

  @Field(type => Contestant)
  contestant: Contestant;

  @Field({ nullable: true })
  isReviewed?: boolean;

  @Field({ nullable: true })
  isApproved?: boolean;
}
