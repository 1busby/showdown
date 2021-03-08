import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { Contestant } from './contestant.model';

@Resolver(of => Contestant)
export class ContestantResolver {
  constructor() {}

  @ResolveField('name', returns => String)
  async getPosts(@Parent() contestant: Contestant) {
    let name = contestant.name;
    if (!name && contestant.profile) {
      name = contestant.profile.username;
    }
    return name;
  }
}
