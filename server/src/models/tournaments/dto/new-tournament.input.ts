import { MaxLength } from 'class-validator';
import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { ContestantInput } from '../../contestants/contestant.input';

@InputType()
export class NewTournamentInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field(type => Int, { nullable: true })
  contestantCount?: number;

  @Field(type => ID, { nullable: true })
  createdBy?: string;

  @Field(type => [ContestantInput], { nullable: 'itemsAndList' })
  contestants?: ContestantInput[];

  @Field({ nullable: true })
  editAccessCode?: string;
}
