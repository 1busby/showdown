import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UpdateResolver } from './update.resolver';
import { UpdateService } from './update.service';
import { UpdateSchema } from './update.schema';
import { SharedModule } from '@shared/index';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([{ name: 'Update', schema: UpdateSchema }]),
  ],
  // exports: [UpdateService],
  providers: [UpdateResolver, UpdateService],
})
export class UpdateModule {}
