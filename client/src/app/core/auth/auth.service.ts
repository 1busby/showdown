import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';

import { IUser } from '@app/shared';
import { SigninGQL } from '../data/user/signin.gql.service';
import { UserGQL } from '../data/user/user.gql.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  loggedInUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  constructor(private signinGql: SigninGQL, private userGql: UserGQL) {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    this.loggedInUser.next(
      user
    );
  }

  user() {
    // When our custom observable gets new data
    return this.loggedInUser.pipe(
      // use that data to query the user store the session info
      switchMap((user) => {
        if (user && user._id) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          return this.userGql.watch({ id: user._id }).valueChanges;
        } else {
          localStorage.removeItem('loggedInUser');
          // tslint:disable-next-line:deprecation
          return of(null);
        }
      }),
      // then extract the data from Apollo's Query object
      map((res) => {
        return res ? res.data.user : null;
      })
    );
  }

  login(username, password) {
    return this.signinGql.mutate({ username }).pipe(
      first(),
      map((user) => {
        this.loggedInUser.next(user.data.signin as IUser);
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage and set current user to null
    this.loggedInUser.next({} as any);
  }
}
