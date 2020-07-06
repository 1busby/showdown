import { Field, Int, InputType, ID } from '@nestjs/graphql';

import { Tournament } from '../../tournament/tournament.model';
import { IMatch } from '@common/index';
import { ContestantInput } from '@models/contestant/contestant.input';

@InputType()
export class MatchInput {
  @Field(type => ID, { nullable: true })
  tournament?: string;

  @Field(type => Int, { nullable: true })
  matchNumber?: number;

  @Field(type => Int, { nullable: true })
  roundNumber?: number;

  @Field(type => ID, { nullable: true })
  highSeedContestant?: string;

  @Field(type => ID, { nullable: true })
  lowSeedContestant?: string;

  @Field(type => Int, { nullable: true })
  highSeedNumber?: number;

  @Field(type => Int, { nullable: true })
  lowSeedNumber?: number;

  @Field(type => ID, { nullable: true })
  winner?: string;

  @Field({ nullable: true })
  winnerSeed?: string;
}
