import { Field, ID, ObjectType } from 'type-graphql';
import { ITeam, IUser } from '../../../shared/models/index';

@ObjectType()
export class Team implements ITeam {
  @Field(type => ID)
  id: string;

  @Field()
  alias: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  createdOn: Date;

  @Field()
  updatedOn: Date;

  @Field({ nullable: true })
  users?: IUser[];
}
