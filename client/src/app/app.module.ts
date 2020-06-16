import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule, typeDefs } from '@app/core';
import { BracketModule } from './features/bracket/bracket.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const uri = environment.production
  ? '/graphql'
  : 'https://localhost:3000/graphql';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    BracketModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const link = httpLink.create({ uri });

    apollo.create({
      link,
      cache: new InMemoryCache(),
      typeDefs,
    });
  }
}
