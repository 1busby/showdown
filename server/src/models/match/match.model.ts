import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { IMatch } from '../../../../shared/models/index';
import { Tournament } from '../tournament/tournament.model';
import { User } from '../user/user.model';
import { Contestant } from '../contestant/contestant.entity';

@ObjectType({ description: 'The tournament model' })
export class Match extends Document implements IMatch {
  @Field(type => ID)
  _id: string;

  @Field(type => ID)
  tournament?: Tournament;
  roundNumber: number;
  matchNumber: number;
  highSeed: Contestant;
  lowSeed: Contestant;
  winner: Contestant;
  winnerSeed: string;
  createdBy?: User;
  contestants?: Contestant[];
  createdOn?: Date;
  updatedOn?: Date;
}
