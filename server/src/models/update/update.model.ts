import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { IUpdate } from '@shared/index';

@ObjectType({ description: 'The update model' })
export class Update extends Document implements IUpdate {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdOn?: Date;
}
