import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CustomLogger } from '@shared/index';
import { PubSub } from 'apollo-server-express';


import { Tournament } from '@models/tournament/tournament.model';
import { NewUserInput } from './dto/new-user.input';
import { SigninInput } from './dto/signin.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './user.model';
import { UserService } from './user.service';
import { TournamentService } from '@models/tournament/tournament.service';

const pubSub = new PubSub();

@Resolver(of => User)
export class UserResolver {
  constructor(private logger: CustomLogger, private readonly userService: UserService, private tournamentService: TournamentService) {}

  @Query(returns => User)
  async user(@Args('dId', { nullable: true }) dId?: string, @Args('username', { nullable: true }) username?: string): Promise<User> {
    const user = dId ? await this.userService.findOneById(dId) : await this.userService.findOne({ username });
    if (!user) {
      throw new NotFoundException(dId);
    }
    return user;
  }

  @Query(returns => [User])
  users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return this.userService.findAll(usersArgs);
  }

  // handle auth in a custom gaurd https://docs.nestjs.com/security/authentication#graphql
  // @UseGuards(LocalAuthGuard)
  @Mutation(returns => User)
  async signin(@Args('signinInput') signinData: SigninInput): Promise<User> {
    // use whatever authentication method 
    const user = await this.userService.findOne(signinData);
    // pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation(returns => User)
  registerUser(@Args('newUserInput') newUserInput: NewUserInput): Promise<User> {
    // validate then 
    const user = this.userService.create(newUserInput);
    // pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation(returns => User)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateOne(updateUserData);
  }

  @ResolveField('tournaments', returns => [Tournament])
  getTournaments(@Parent() user: User): Promise<Tournament[]> {
    const { _id } = user;
    const sid = _id.toString();
    return this.tournamentService.findAllByUser({ userId: _id });
  }
}
