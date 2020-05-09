import { InterfaceType, Field, ID, Int } from '@nestjs/graphql';
import { IContestant } from '../../../../shared/models';

@InterfaceType()
export abstract class Contestant implements Partial<IContestant> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => Int, { nullable: true })
  seed?: number;

  @Field(type => Int, { nullable: true })
  points?: number;
}