import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './authentication/auth.module';

@NgModule({
  declarations: [],
  exports: [AppRoutingModule, AuthModule]
})
export class CoreModule {}
