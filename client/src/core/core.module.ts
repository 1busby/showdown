import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './authentication/auth.module';

@NgModule({
  declarations: [],
  exports: [AppRoutingModule, AuthModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class CoreModule {}
