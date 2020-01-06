import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { BracketModule } from './../modules/bracket/bracket.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from 'src/core/authentication/helpers/error.interceptor';
import { JwtInterceptor } from 'src/core/authentication/helpers/jwt.interceptor';
import { fakeBackendProvider } from 'src/core/authentication/helpers/fake-backend';
import { AppStore } from 'src/shared/app.store';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    BracketModule,
    GraphQLModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    AppStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
