import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { EditUserGQL } from '@app/core';

export interface IAlert {
  type?: string;
  text?: string;
  route?: string;
}

@Injectable({ providedIn: 'root' })
export class AlertService {
  readonly VAPID_PUBLIC_KEY =
    'BPsLfHWEVrAUNEVuXwzFsUWSmIG4Sq6EMuySGbkiDkI7WK1lg71wQL1OLVEFCScVmJpy1W2OajKRPwFY-ysirzY';
  private subject = new Subject<IAlert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router, private swPush: SwPush, private editUserGql: EditUserGQL) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert message
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<IAlert> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message });
  }

  clear() {
    // clear by calling subject.next() without parameters
    this.subject.next();
  }

  subscribeToNotifications(user) {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => {
        this.editUserGql.mutate({ 
          _id: user._id,
          pushSubscription: JSON.stringify(sub)
        }).pipe(first()).subscribe();
      })
      .catch((err) =>
        console.error('Could not subscribe to notifications', err)
      );
  }
}
