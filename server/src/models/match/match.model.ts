import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { IMatch } from '@app/shared';
import { Tournament } from '../tournament/tournament.model';
import { User } from '../user/user.model';
import { Contestant } from '../contestant/contestant.entity';

@ObjectType({ description: 'The match model' })
export class Match extends Document implements IMatch {
  @Field(type => ID)
  _id: string;

  tournament?: Tournament;

  @Field(type => Int)
  roundNumber?: number;

  @Field(type => Int)
  matchNumber?: number;

  highSeed?: Contestant;

  lowSeed?: Contestant;

  winner?: Contestant;

  winnerSeed?: string;

  createdBy?: User;

  contestants?: Contestant[];

  createdOn?: Date;

  updatedOn?: Date;
}
