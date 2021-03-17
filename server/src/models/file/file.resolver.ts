import { UploadedFile } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CustomLogger } from '@shared/index';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
const aws = require('aws-sdk');
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();
const path = require('path');

import { File } from './file.model';
import { FileService } from './file.service';

@Resolver(of => File)
export class FileResolver {
  constructor(private logger: CustomLogger) {}

  @Mutation(returns => Boolean)
  singleUploadStream(
    @Args('file', { name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<boolean> {
    const { createReadStream, filename, mimetype } = file;
    const fileStream = createReadStream();

    //Here stream it to S3
    // Enter your bucket name here next to "Bucket: "
    const uploadParams = {
      Bucket: 'showdown-dev',
      Key: filename,
      Body: fileStream,
    };
    return s3
      .upload(uploadParams)
      .promise()
      .then(result => {
        this.logger.error('LOOK successfully uploaded file ', result);
        return true;
      })
      .catch(e => {
        this.logger.error('Could not upload file because ', e);
        return false;
      });
  }
}
