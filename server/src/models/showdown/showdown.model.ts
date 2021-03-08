import { Field, ID, ObjectType, Int, Float } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { IShowdown } from '@shared/index';
import { Contestant } from '@models/contestant/contestant.model';
import { Update } from '@models/update/update.model';

@ObjectType({ description: 'The Challenge model' })
export class Showdown extends Document implements IShowdown {
  @Field(type => ID)
  _id: string;

  @Field(type => Contestant, { nullable: true })
  challenger?: Contestant;

  @Field(type => Contestant, { nullable: true })
  defender?: Contestant;

  @Field({ nullable: true })
  createdOn?: Date;

  @Field({ nullable: true })
  updatedOn?: Date;

  @Field({ nullable: true })
  expiresOn?: Date;

  @Field({ nullable: true })
  linkCode?: string;

  @Field(type => [Update], { nullable: 'itemsAndList' })
  updates?: Update[];

  @Field(type => Int, { nullable: true })
  setCount?: number;

  @Field(type => Float, { nullable: true })
  wager?: number;

  @Field({ nullable: true })
  consensusReached?: boolean;

  @Field({ nullable: true })
  isChallengerReviewing?: boolean;

  @Field({ nullable: true })
  isDefenderReviewing?: boolean;
}
