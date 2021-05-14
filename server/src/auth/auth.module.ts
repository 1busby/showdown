import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { UserModule } from '../models/user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService, HttpStrategy],
})
export class AuthModule {}
