import { Field, Int, ArgsType } from '@nestjs/graphql';

import { Contestant } from '../../contestant/contestant.entity';
import { Tournament } from '../../tournament/tournament.model';

@ArgsType()
export class MatchArgs {
  // tournament?: Tournament;

  // @Field(type => Int)
  // roundNumber?: number;

  // @Field(type => Int)
  // matchNumber?: number;

  // highSeedContestant?: Contestant;

  // lowSeedContestant?: Contestant;

  // winner?: Contestant;

  // winnerSeed?: string;

  // contestants?: Contestant[];

  // createdOn?: Date;

  // updatedOn?: Date;

  // highSeedNumber?: number;

  // lowSeedNumber?: number;
}
