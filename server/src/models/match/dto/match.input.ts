import { Field, Int, InputType } from '@nestjs/graphql';

import { IMatch } from '@shared/index';
import { SetInput } from '@models/set/set.input';

@InputType()
export class MatchInput implements Partial<IMatch> {
  @Field(type => Int, { nullable: true })
  matchNumber?: number;

  @Field(type => Int, { nullable: true })
  roundNumber?: number;

  @Field(type => Int, { nullable: true })
  highSeedNumber?: number;

  @Field(type => Int, { nullable: true })
  lowSeedNumber?: number;

  @Field({ nullable: true })
  winnerSeed?: string;

  @Field(type => [SetInput], { nullable: 'itemsAndList' })
  sets?: SetInput[];
}
