import { MaxLength } from 'class-validator';
import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { ContestantInput } from '../../contestant/contestant.input';
import { MatchInput } from '@models/match/dto/match.input';
import { UpdateInput } from '@models/update/dto/update.input';

@InputType()
export class UpdateShowdownInput {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  @MaxLength(30)
  name?: string;

  @Field({ nullable: true })
  @MaxLength(30)
  description?: string;

  @Field(type => Int, { nullable: true })
  contestantCount?: number;

  @Field(type => [ContestantInput], { nullable: 'itemsAndList' })
  contestants?: ContestantInput[];

  @Field(type => [MatchInput], { nullable: 'itemsAndList' })
  matches?: MatchInput[];

  @Field(type => [UpdateInput], { nullable: 'itemsAndList' })
  updates?: UpdateInput[];

  @Field({ nullable: true })
  editAccessCode?: string;

  @Field(type => ID, { nullable: true })
  updatedBy?: string;

  @Field(type => Int, { nullable: true })
  setCount?: number;

  @Field({ nullable: true })
  hasStarted?: boolean;

  @Field({ nullable: true })
  allowRegistration?: boolean;

  @Field({ nullable: true })
  allowSelfScoring?: boolean;

  @Field({ nullable: true })
  structure?: 'single-elim' | 'double-elim' | 'round-robin';
}
