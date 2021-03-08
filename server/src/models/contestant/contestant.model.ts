import { InterfaceType, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IContestant } from '@shared/index';
import { User } from '../user/user.model';

@ObjectType({ description: 'The match model' })
export abstract class Contestant implements IContestant {
  @Field(type => ID, { nullable: true })
  _id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Int, { nullable: true })
  seed?: number;

  @Field(type => Int, { nullable: true })
  points?: number;

  @Field({ nullable: true })
  isRegistered?: boolean;

  @Field({ nullable: true })
  profile?: User;
}
