import { MaxLength } from 'class-validator';
import { Field, InputType, ID } from 'type-graphql';
import { User } from '../../users/user';
import { Tournament } from '../tournament';

@InputType()
export class NewTournamentInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  contestantCount: number;

  @Field(type => ID, { nullable: true })
  createdBy?: string;
}
