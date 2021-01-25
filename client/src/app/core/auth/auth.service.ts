import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Magic } from 'magic-sdk';

import { IUser } from '@app/shared';
import { SigninGQL } from '../data/user/signin.gql.service';
import { UserGQL } from '../data/user/user.gql.service';
import { RegisterUserGQL } from '../data/user/register-user.gql.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  magic;
  loggedInUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  isLoggedIn = false;

  constructor(
    private signinGql: SigninGQL,
    private userGql: UserGQL,
    private registerGql: RegisterUserGQL
  ) {
    this.magic = new Magic('pk_test_3E6E5F515983F699');
    this.magic.preload();
    // const user = JSON.parse(localStorage.getItem('loggedInUser'));
    // this.loggedInUser.next(user);
    this.magic.user.isLoggedIn().then((isLoggedIn) => {
      debugger
      const userMetadata = this.magic.user.getMetadata();
    })
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

  signup(email, username) {
    return this.registerGql.mutate({ email, username }).pipe(
      first(),
      map((user) => {
        this.loggedInUser.next(user.data.registerUser as IUser);
        return user;
      })
    );
  }

  login(email, username) {
    debugger
    if (email) {
      /* One-liner login 🤯 */
      return this.magic.auth.loginWithMagicLink({ email })
      .then(() => {
        return this.magic.auth.loginWithCredential();
      })
      .then(() => {
        return this.magic.user.getMetadata();
      })
      .then((metadata) => {
        return this.signinGql.mutate({ email, username }).pipe(
          first(),
          map((user) => {
            this.loggedInUser.next(user.data.signin as IUser);
            return user;
          })
        );
      });
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    // this.loggedInUser.next({} as any);
    return this.magic.user.logout();
  }
}
