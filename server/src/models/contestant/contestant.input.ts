import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { IContestant } from '@app/shared';

@InputType()
export class ContestantInput implements Partial<IContestant> {
  @Field(type => ID, { nullable: true })
  _id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Int, { nullable: true })
  seed?: number;

  @Field(type => Int, { nullable: true })
  points?: number;

  @Field(type => ID, { nullable: true })
  isRegistered?: number;
}
