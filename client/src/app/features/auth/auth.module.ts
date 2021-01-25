import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
