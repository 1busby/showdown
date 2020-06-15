import { ObjectType } from '@nestjs/graphql';

import { Contestant } from '../contestants/contestant.interface';

@ObjectType({ implements: [Contestant], description: 'A user that has not registered on the site' })
export class AnonymousUser implements Contestant {
  // fields inherited from Contestant
  id?: string;

  name?: string;

  seed?: number;

  points?: number;
}
