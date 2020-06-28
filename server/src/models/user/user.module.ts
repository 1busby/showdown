import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DateScalar } from '../../common/scalars/date.scalar';
import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersResolver, UsersService, DateScalar],
})
export class UsersModule {}
