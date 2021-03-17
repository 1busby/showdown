import { Module } from '@nestjs/common';

import { FileResolver } from './file.resolver';
import { FileService } from './file.service';
import { SharedModule } from '@shared/index';

@Module({
  imports: [
    SharedModule,
  ],
  providers: [FileResolver, FileService],
})
export class FileModule {}
