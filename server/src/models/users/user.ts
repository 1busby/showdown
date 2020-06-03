import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Team } from '../teams/team';
import { IUser } from '../../../../shared/models/index';
import { Document } from 'mongoose';

@ObjectType({ description: 'The user model' })
export class User extends Document implements IUser {
  // fields inherited from Contestant
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Team], { nullable: 'itemsAndList' })
  teams?: Team[];

  @Field({ nullable: true })
  createdOn: Date;

  @Field({ nullable: true })
  updatedOn: Date;
}
