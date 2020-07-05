import { InterfaceType, Field, ID, Int } from '@nestjs/graphql';
import { IContestant } from '@common/index';
import { User } from '../user/user.model';

@InterfaceType({
  resolveType(contestant) {
    return User;
  },
})
export abstract class Contestant implements IContestant {
  @Field(type => ID)
  _id: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Int, { nullable: true })
  seed?: number;

  @Field(type => Int, { nullable: true })
  points?: number;

  @Field({ nullable: true })
  isRegistered?: boolean;
}
