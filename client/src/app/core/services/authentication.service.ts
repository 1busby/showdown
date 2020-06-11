import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { AppStore } from './app.store.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, private appStore: AppStore) {
    this.appStore.loggedInUser.next(
      JSON.parse(localStorage.getItem('loggedInUser'))
    );
  }

  login(username, password) {
    return this.http
      .post<any>(`${'http://localhost:4000'}/users/authenticate`, {
        username,
        password
      })
      .pipe(
        map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          this.appStore.loggedInUser.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('loggedInUser');
    this.appStore.loggedInUser.next(null);
  }
}
