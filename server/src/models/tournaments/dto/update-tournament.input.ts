import { MaxLength } from 'class-validator';
import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { ContestantInput } from '../../contestants/contestant.input';

@InputType()
export class UpdateTournamentInput {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  @MaxLength(30)
  name?: string;

  @Field(type => Int, { nullable: true })
  contestantCount?: number;

  @Field(type => [ContestantInput], { nullable: 'itemsAndList' })
  contestants?: ContestantInput[];

  @Field(type => ID, { nullable: true })
  updatedBy?: string;
}
