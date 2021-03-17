import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

import { IFile } from '@shared/index';

@ObjectType({ description: 'The update model' })
export class File extends Document implements IFile {
  @Field()
  filename: string;
  @Field()
  mimetype: string;
  @Field()
  encoding: string;
}
