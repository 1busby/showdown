import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
import { ContestantInput } from '../../contestant/contestant.input';
import { MatchInput } from '@models/match/dto/match.input';

@InputType()
export class NewTournamentInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field({ nullable: true })
  @MaxLength(30)
  description?: string;

  @Field(type => Int, { nullable: true })
  contestantCount?: number;

  @Field(type => ID, { nullable: true })
  createdBy?: string;

  @Field(type => [ContestantInput], { nullable: 'itemsAndList' })
  contestants?: ContestantInput[];

  @Field(type => [MatchInput], { nullable: 'itemsAndList' })
  matches?: MatchInput[];

  @Field({ nullable: true })
  editAccessCode?: string;

  @Field(type => Int, { nullable: true })
  setCount?: number;

  @Field({ nullable: true })
  allowRegistration?: boolean;

  @Field({ nullable: true })
  allowSelfScoring?: boolean;

  @Field({ nullable: true })
  structure?: 'single-elim' | 'double-elim' | 'round-robin';
}
