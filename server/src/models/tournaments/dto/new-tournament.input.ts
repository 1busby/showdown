import { MaxLength } from 'class-validator';
import { Field, InputType, ID, Int } from '@nestjs/graphql';

@InputType()
export class NewTournamentInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field(type => Int, { nullable: true })
  contestantCount?: number;

  @Field(type => ID, { nullable: true })
  createdBy?: string;
}
