import { MaxLength } from 'class-validator';
import { Field, InputType, ID, Int } from 'type-graphql';
import { Contestant } from 'src/models/contestants/contestant.interface';

@InputType()
export class UpdateTournamentInput {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  @MaxLength(30)
  name: string;

  @Field(type => Int, { nullable: true })
  contestantCount?: number;

  @Field(type => [String], { nullable: true })
  contestants?: string[];

  @Field(type => ID, { nullable: true })
  createdBy?: string;
}
