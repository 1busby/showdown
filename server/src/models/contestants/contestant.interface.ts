import { InterfaceType, Field, ID, Int } from '@nestjs/graphql';
import { IContestant } from '../../../../shared/models';
import { User } from '../users/user';

@InterfaceType({
  resolveType(contestant) {
    return User;
  },
})
export abstract class Contestant implements Partial<IContestant> {
  @Field(type => ID, { nullable: true })
  _id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Int, { nullable: true })
  seed?: number;

  @Field(type => Int, { nullable: true })
  points?: number;

  @Field({ nullable: true })
  isRegistered: boolean;
}
