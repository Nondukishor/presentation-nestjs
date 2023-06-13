import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewUserInput } from './dto/new-users.input';
import { UserssArgs } from './dto/users.args';
import { Users } from './models/users.model';
import { UserService } from './users.service';

const pubSub = new PubSub();

@Resolver(of => Users)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => Users)
  async user(@Args('id') id: string): Promise<Users> {
    const recipe = await this.userService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query(returns => [Users])
  users(@Args() usersArgs: UserssArgs): Promise<Users[]> {
    return this.userService.findAll(usersArgs);
  }

  @Mutation(returns => Users)
  async addUser(
    @Args('newUserData') newUserData: NewUserInput,
  ): Promise<Users> {
    const user = await this.userService.create(newUserData);
    pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation(returns => Boolean)
  async removeUser(@Args('id') id: string) {
    return this.userService.remove(id);
  }

  @Subscription(returns => Users)
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }
}