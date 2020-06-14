import { InterfaceType, Field, ID, Int } from '@nestjs/graphql';
import { IContestant } from '../../../../shared/models';

@InterfaceType()
export abstract class Contestant implements Partial<IContestant> {
  @Field(type => ID, { nullable: true })
  eventId?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Int, { nullable: true })
  seed?: number;

  @Field(type => Int, { nullable: true })
  points?: number;
}
