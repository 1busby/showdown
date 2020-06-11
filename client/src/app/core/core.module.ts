import { NgModule, Optional, SkipSelf } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [],
  exports: [],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
