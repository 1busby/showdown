import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { IUser } from '../../../../../shared/models';
import { User } from 'src/models/users/user';

@InputType()
export class NewTournamentInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  contestantCount: string;

  @Field(type => User)
  createdBy: IUser;

  @Field()
  lastName: string;
}
