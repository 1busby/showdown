import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Magic } from 'magic-sdk';

import { IUser } from '@app/shared';
import { UserGQL } from '../data/user/user.gql.service';
import { RegisterUserGQL } from '../data/user/register-user.gql.service';
import { IconExtension } from '@magic-ext/icon';

@Injectable({ providedIn: 'root' })
export class AuthService {
  magic: Magic;
  userId: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  isLoggedIn = false;
  publicAddress;
  isLoadingProfile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private userGql: UserGQL, private registerGql: RegisterUserGQL) {
    this.magic = new Magic('pk_test_3E6E5F515983F699', {
      extensions: [
        new IconExtension({
          rpcUrl: 'https://bicon.net.solidwallet.io/api/v3',
        }),
      ],
    });
    this.magic.preload();
    // const user = JSON.parse(localStorage.getItem('loggedInUser'));
    // this.loggedInUser.next(user);
    this.magic.user
      .isLoggedIn()
      .then((isLoggedIn) => {
        console.log('LOOK isLoggedIn ', isLoggedIn);
        if (isLoggedIn) {
          this.isLoadingProfile.next(true);
          return this.fetchUserAddressMetadata();
        }
      })
      .then((result) => {
        if (result) {
          this.isLoadingProfile.next(false);
          this.userId.next(result.issuer);
        }
      })
      .catch((error) => {
        console.error('Error getting Logged in user ', error);
      });
  }

  get user() {
    // When our custom observable gets new data
    return this.userId.pipe(
      // use that data to query the user store the session info
      switchMap((dId) => {
        if (dId) {
          return this.userGql.watch({ dId }).valueChanges;
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
    if (email && username) {
      this.isLoadingProfile.next(true);
      return this.magic.auth
        .loginWithMagicLink({ email })
        .then(() => {
          return this.fetchUserAddressMetadata();
        })
        .then(result => {
          return this.registerGql.mutate({ dId: result.issuer, username, email, iconPublicAddress: this.publicAddress }).toPromise();
        })
        .then((result) => {
          this.isLoadingProfile.next(false);
          return this.userId.next(result.data.registerUser._id);
        })
        .catch((err) => {
          console.error('Could not log in beacuse ', err);
        });
    }
  }

  login(email) {
    if (email) {
      this.isLoadingProfile.next(true);
      return this.magic.auth
        .loginWithMagicLink({ email })
        .then(() => {
          return this.fetchUserAddressMetadata();
        })
        .then((result) => {
          this.isLoadingProfile.next(false);
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
    return this.magic.user.logout()
    .then(result => {
      this.userId.next(null);
    });
  }

  private async fetchUserAddressMetadata() {
    this.publicAddress = await (this.magic.icon as any).getAccount();
    return this.magic.user.getMetadata();
  }
}
