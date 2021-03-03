import { MaxLength } from 'class-validator';
import { Field, InputType, ID } from '@nestjs/graphql';
import { TournamentInput } from '@models/tournament/dto/tournament.input';

@InputType()
export class UpdateUserInput {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  @MaxLength(30)
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [String], { nullable: 'itemsAndList' })
  tournaments?: string[];
}
