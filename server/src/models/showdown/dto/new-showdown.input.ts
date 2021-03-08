import { Field, InputType, ID, Int, Float } from '@nestjs/graphql';

@InputType()
export class NewShowdownInput {
  @Field(type => ID, { nullable: true })
  _id?: string;

  @Field(type => ID, { nullable: true })
  challenger?: string;

  @Field(type => ID, { nullable: true })
  defender?: string;

  @Field({ nullable: true })
  expiresOn?: Date;

  @Field(type => Int, { nullable: true })
  setCount?: number;

  @Field(type => Float, { nullable: true })
  wager?: number;
}
