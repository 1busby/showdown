import { MaxLength } from 'class-validator';
import { Field, InputType, ID, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTournamentInput {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  @MaxLength(30)
  name: string;

  @Field(type => Int, { nullable: true })
  contestantCount?: number;

  @Field(type => ID, { nullable: true })
  createdBy?: string;
}
