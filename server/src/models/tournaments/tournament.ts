import { Team } from '../teams/team';
import { Field, ID, ObjectType } from 'type-graphql';
import { IUser, ITeam, ITournament } from '../../../../shared/models/index';
import { User } from '../users/user';

@ObjectType({ description: 'The user model' })
export class Tournament implements ITournament {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  contestantCount: number;

  @Field(type => User)
  createdBy: IUser;

  @Field(type => [Team], { nullable: true })
  teams?: ITeam[];

  @Field({ nullable: true })
  createdOn: Date;

  @Field({ nullable: true })
  updatedOn: Date;
}
