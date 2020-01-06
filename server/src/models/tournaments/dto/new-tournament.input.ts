import { MaxLength } from 'class-validator';
import { Field, InputType, ID, Int } from 'type-graphql';

@InputType()
export class NewTournamentInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field(type => Int)
  contestantCount: number;

  @Field(type => ID, { nullable: true })
  createdBy?: string;
}
