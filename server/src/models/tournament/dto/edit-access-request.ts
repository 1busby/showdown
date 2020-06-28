import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'An object with to inform app of access status' })
export class EditAccessRequest {
  @Field({ nullable: true })
  canEdit?: boolean;
}
