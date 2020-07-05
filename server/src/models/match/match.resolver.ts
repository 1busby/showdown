import { NotFoundException, NotAcceptableException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ID,
} from '@nestjs/graphql';

import { Match } from './match.model';
import { MatchService } from './match.service';

@Resolver(of => Match)
export class MatchResolver {
  constructor(private readonly matchService: MatchService) {}
}
