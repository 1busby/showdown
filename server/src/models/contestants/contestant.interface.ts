import { InterfaceType, Field, ID, Int } from '@nestjs/graphql';
import { IContestant } from '../../../../shared/models';
import { User } from '../users/user';
import { AnonymousUser } from '../users/anonymousContestant';

@InterfaceType({
  resolveType(contestant) {
    // if (contestant.isRegistered) {
    // }
    return User;
    return AnonymousUser;
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
}
