import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DateScalar } from '../../common/scalars/date.scalar';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersResolver, UsersService, DateScalar],
})
export class UsersModule {}
