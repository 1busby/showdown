import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
