import { MaxLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SigninInput {
  @Field()
  @MaxLength(30)
  username: string;
}
