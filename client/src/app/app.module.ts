import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';




import { CoreModule, typeDefs } from '@app/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';
import { environment } from '../environments/environment';

const uri = environment.production
  ? '/graphql'
  : 'http://localhost:3000/graphql';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
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
      connectToDevTools: true
    });
  }
}
