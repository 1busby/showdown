import { MaxLength } from 'class-validator';
import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { ContestantInput } from '../../contestant/contestant.input';
import { MatchInput } from '@models/match/dto/match.input';
import { UpdateInput } from '@models/update/dto/update.input';
import { RegistrationRequest } from '../registration-request.model';

@InputType()
export class RegistrationRequestInput {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  isReviewed?: boolean;

  @Field({ nullable: true })
  isApproved?: boolean;
}
