import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CustomLogger } from '@shared/index';
import { PubSub } from 'apollo-server-express';
import { NewUserInput } from './dto/new-user.input';
import { SigninInput } from './dto/signin.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './user.model';
import { UsersService } from './user.service';

const pubSub = new PubSub();

@Resolver(of => User)
export class UsersResolver {
  constructor(private logger: CustomLogger, private readonly usersService: UsersService) {}

  @Query(returns => User)
  async user(@Args('dId', { nullable: true }) dId?: string, @Args('username', { nullable: true }) username?: string): Promise<User> {
    const user = dId ? await this.usersService.findOneById(dId) : await this.usersService.findOne({ username });
    if (!user) {
      throw new NotFoundException(dId);
    }
    return user;
  }

  @Query(returns => [User])
  users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return this.usersService.findAll(usersArgs);
  }

  // handle auth in a custom gaurd https://docs.nestjs.com/security/authentication#graphql
  // @UseGuards(LocalAuthGuard)
  @Mutation(returns => User)
  async signin(@Args('signinInput') signinData: SigninInput): Promise<User> {
    // use whatever authentication method 
    const user = await this.usersService.findOne(signinData);
    // pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation(returns => User)
  registerUser(@Args('newUserInput') newUserInput: NewUserInput): Promise<User> {
    // validate then 
    const user = this.usersService.create(newUserInput);
    // pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation(returns => User)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<User> {
    this.logger.log('LOOK updateUser ' + JSON.stringify(updateUserData));
    return this.usersService.updateOne(updateUserData).then(res => {
      this.logger.log('LOOK res ' + res);
      return res;
    });
  }
}
