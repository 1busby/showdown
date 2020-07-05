import { Field, ID, ObjectType, Int, HideField } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { IMatch } from '@common/index';
import { Contestant } from '../contestant/contestant.entity';
import { Tournament } from '../tournament/tournament.model';

@ObjectType({ description: 'The match model' })
export class Match extends Document implements IMatch {
  @Field(type => ID)
  _id: string;

  tournament?: Tournament;

  @Field(type => Int)
  roundNumber?: number;

  @Field(type => Int)
  matchNumber?: number;

  highSeedContestant?: Contestant;

  lowSeedContestant?: Contestant;

  winner?: Contestant;

  winnerSeed?: 'HIGHSEED' | 'LOWSEED';

  contestants?: Contestant[];

  createdOn?: Date;

  updatedOn?: Date;

  highSeedNumber?: number;

  lowSeedNumber?: number;
}
