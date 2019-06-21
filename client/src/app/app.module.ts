import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
