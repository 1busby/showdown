import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewUserInput } from './dto/new-user.input';
import { SigninInput } from './dto/signin.input';
import { UsersArgs } from './dto/users.args';
import { User } from './user.model';
import { UsersService } from './user.service';

const pubSub = new PubSub();

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
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
}
