import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { IMatch } from '@shared/index';
import { Contestant } from '../contestant/contestant.entity';
import { Tournament } from '../tournament/tournament.model';

@ObjectType({ description: 'The match model' })
export class Match extends Document implements IMatch {
  @Field(type => ID)
  _id: string;

  @Field(type => Int, { nullable: true })
  matchNumber?: number;

  @Field(type => Int, { nullable: true })
  roundNumber?: number;

  @Field({ nullable: true })
  winnerSeed?: string;

  @Field({ nullable: true })
  createdOn?: Date;

  @Field({ nullable: true })
  updatedOn?: Date;

  @Field(type => Int, { nullable: true })
  highSeedNumber?: number;

  @Field(type => Int, { nullable: true })
  lowSeedNumber?: number;
}
