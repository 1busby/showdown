import { Field, Int, InputType, ID } from '@nestjs/graphql';

import { ISet } from '@shared/index';

@InputType()
export class SetInput implements Partial<ISet> {
  @Field(type => ID)
  _id: string;

  @Field(type => Int, { nullable: true })
  orderNumber?: number;

  @Field(type => Int, { nullable: true })
  highSeedScore?: number;

  @Field(type => Int, { nullable: true })
  lowSeedScore?: number;

  @Field({ nullable: true })
  outcome?: 'high' | 'low' | 'tie';

  @Field({ nullable: true })
  notes?: string;
}
