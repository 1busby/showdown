import { Field, InputType, ID, Int } from '@nestjs/graphql';

import { IUpdate } from '@shared/index';

@InputType()
export class UpdateInput implements Partial<IUpdate> {
  _id?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => [ID], { nullable: 'itemsAndList' })
  recipientIds?: string[];

  @Field(type => Int, { nullable: true })
  createdOn?: Date;
}
