import { Field, InputType, ID, Int, Float } from '@nestjs/graphql';
import { Contestant } from '@models/contestant/contestant.entity';

@InputType()
export class ShowdownInput {
  @Field(type => ID)
  _id: string;

  @Field(type => ID, { nullable: true })
  challenger?: string;

  @Field(type => ID, { nullable: true })
  defender?: string;

  @Field({ nullable: true })
  expiresOn?: Date;

  @Field({ nullable: true })
  linkCode?: string;

  @Field(type => Int, { nullable: true })
  setCount?: number;

  @Field(type => Float, { nullable: true })
  wager?: number;

  @Field({ nullable: true })
  consensusReached?: boolean;
}
