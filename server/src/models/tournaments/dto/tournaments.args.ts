import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class TournamentsArgs {
  @Field(type => Int, { nullable: true })
  @Min(0)
  skip: number = 0;

  @Field(type => Int, { nullable: true })
  @Min(1)
  @Max(50)
  take: number = 25;
}
