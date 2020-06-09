import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppStore, TournamentDataService } from '@app/core';
import { AuthModule } from './authentication/auth.module';

@NgModule({
  declarations: [],
  exports: [AuthModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AppStore, TournamentDataService],
})
export class CoreModule {}
