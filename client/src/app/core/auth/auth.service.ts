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

  constructor(private signinGql: SigninGQL, private userGql: UserGQL, private registerGql: RegisterUserGQL) {
    this.magic = new Magic('pk_test_3E6E5F515983F699');
    this.magic.preload();
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    this.loggedInUser.next(user);
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
    return this.registerGql.mutate({ username }).pipe(
      first(),
      map((user) => {
        this.loggedInUser.next(user.data.registerUser as IUser);
        return user;
      })
    );
  }

  login(email, username) {
    // if (email) {
    //   /* One-liner login 🤯 */
    //   await this.magic.auth.loginWithMagicLink({ email, redirectURI }); // 👈 Notice the additional parameter!
    //   this.render();
    // }
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

  /* 3. Implement Render Function */
  async render() {
    let html = '';

    /*
    For this tutorial, our callback route is simply "/callback"
  */
    if (window.location.pathname === '/callback') {
      try {
        /* Complete the "authentication callback" */
        await this.magic.auth.loginWithCredential();

        /* Get user metadata including email */
        const userMetadata = await this.magic.user.getMetadata();

        html = `
        <h1>Current user: ${userMetadata.email}</h1>
        <button onclick="handleLogout()">Logout</button>
      `;
      } catch {
        /* In the event of an error, we'll go back to the login page */
        window.location.href = window.location.origin;
      }
    } else {
      const isLoggedIn = await this.magic.user.isLoggedIn();

      /* Show login form if user is not logged in */
      html = `
      <h1>Please sign up or login</h1>
      <form onsubmit="handleLogin(event)">
        <input type="email" name="email" required="required" placeholder="Enter your email" />
        <button type="submit">Send</button>
      </form>
    `;

      if (isLoggedIn) {
        /* Get user metadata including email */
        const userMetadata = await this.magic.user.getMetadata();
        html = `
        <h1>Current user: ${userMetadata.email}</h1>
        <button onclick="handleLogout()">Logout</button>
      `;
      }
    }

    document.getElementById('body').innerHTML = html;
  }
}
