import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { ISet } from '@shared/index';

@ObjectType({ description: 'A set for a match' })
export class Set extends Document implements ISet {
  @Field(type => ID)
  _id: string;

  @Field(type => Int, { nullable: true })
  highSeedScore?: number;

  @Field(type => Int, { nullable: true })
  lowSeedScore?: number;

  @Field({ nullable: true })
  outcome?: 'high' | 'low' | 'tie';

  @Field({ nullable: true })
  startedOn?: Date;

  @Field({ nullable: true })
  completedOn?: Date;

  @Field({ nullable: true })
  notes?: string;
}
