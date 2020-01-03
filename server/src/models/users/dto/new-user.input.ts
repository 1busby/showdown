import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

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
