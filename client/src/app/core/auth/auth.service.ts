import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Magic } from 'magic-sdk';

import { IUser } from '@app/shared';
import { UserGQL } from '../data/user/user.gql.service';
import { RegisterUserGQL } from '../data/user/register-user.gql.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  magic: Magic;
  userId: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  isLoggedIn = false;

  constructor(private userGql: UserGQL, private registerGql: RegisterUserGQL) {
    this.magic = new Magic('pk_test_3E6E5F515983F699');
    this.magic.preload();
    // const user = JSON.parse(localStorage.getItem('loggedInUser'));
    // this.loggedInUser.next(user);
    this.magic.user
      .isLoggedIn()
      .then((isLoggedIn) => {
        if (isLoggedIn) {
          return this.magic.user.getMetadata();
        }
      })
      .then((result) => {
        this.userId.next(result.issuer);
      })
      .catch((error) => {
        console.error('Error getting Logged in user ', error);
      });
  }

  get user() {
    // When our custom observable gets new data
    return this.userId.pipe(
      // use that data to query the user store the session info
      switchMap((id) => {
        if (id) {
          return this.userGql.watch({ id }).valueChanges;
        } else {
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
        this.userId.next(user.data.registerUser._id);
        return user;
      })
    );
  }

  login(email) {
    if (email) {
      /* One-liner login 🤯 */
      return this.magic.auth
        .loginWithMagicLink({ email })
        .then(() => {
          return this.magic.user.getMetadata();
        })
        .then((result) => {
          return this.userId.next(result.issuer);
        })
        .catch((err) => {
          console.error('Could not log in beacuse ', err);
        });
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    // this.loggedInUser.next({} as any);
    return this.magic.user.logout();
  }
}
