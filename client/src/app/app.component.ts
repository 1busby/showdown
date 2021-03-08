import { Component } from '@angular/core';

import { StateGQL } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private stateGql: StateGQL) {
    this.stateGql.setIsDark(false);
  }
}
