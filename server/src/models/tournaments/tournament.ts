import { Team } from '../teams/team';
import { Field, ID, ObjectType, Int } from 'type-graphql';
import { ITournament } from '../../../../shared/models/index';
import { User } from '../users/user';
import { Document } from 'mongoose';

@ObjectType({ description: 'The tournament model' })
export class Tournament extends Document implements ITournament {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => Int)
  contestantCount: number;

  @Field(type => User, { nullable: true })
  createdBy: User;

  @Field(type => [Team], { nullable: true })
  teams?: Team[];

  @Field({ nullable: true })
  createdOn: Date;

  @Field({ nullable: true })
  updatedOn: Date;

  @Field({ nullable: true })
  linkCode: string;
}
