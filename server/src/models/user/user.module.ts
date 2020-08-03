import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';
import { UserSchema } from './user.schema';
import { SharedModule } from '@shared/index';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    SharedModule,
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
