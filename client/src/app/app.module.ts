import { BracketViewComponent } from './../modules/bracket/bracket-view/bracket-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { BracketModule } from './../modules/bracket/bracket.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    BracketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
