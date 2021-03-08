import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

import { StateGQL } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly VAPID_PUBLIC_KEY = "BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo";

  constructor(private stateGql: StateGQL, private swPush: SwPush) {
    this.stateGql.setIsDark(false);
    this.subscribeToNotifications();
  }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => {
      console.log('LOOK Push Subscription ', sub);
    })
    .catch(err => console.error("Could not subscribe to notifications", err));
}
}
