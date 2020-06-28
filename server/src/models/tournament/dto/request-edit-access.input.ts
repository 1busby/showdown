import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RequestEditAccessInput {
  @Field({ nullable: true })
  tournamentId?: string;

  @Field({ nullable: true })
  editAccessCode?: string;
}
