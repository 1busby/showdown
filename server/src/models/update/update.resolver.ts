import { Resolver } from '@nestjs/graphql';

import { Update } from './update.model';
import { UpdateService } from './update.service';

@Resolver(of => Update)
export class UpdateResolver {
  constructor(private readonly updateService: UpdateService) {}
}
