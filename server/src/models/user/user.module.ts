import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';
import { UserSchema } from './user.schema';
import { CommonModule } from '@common/index';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    CommonModule,
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
