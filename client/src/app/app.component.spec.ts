/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', waitForAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
