import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { IContestant } from '../../../../shared/models';

@InputType()
export class ContestantInput implements Partial<IContestant> {
  @Field({ nullable: true })
  name?: string;

  @Field(type => Int, { nullable: true })
  seed?: number;

  @Field(type => Int, { nullable: true })
  points?: number;

  @Field(type => ID, { nullable: true, description: 'User ID if not anonymous' })
  userId?: number;
}
