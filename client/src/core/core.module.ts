import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [HomeComponent],
  exports: [AppRoutingModule]
})
export class CoreModule {}
