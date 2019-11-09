import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from 'src/core/authentication/models/user';
import { AuthenticationService } from 'src/core/authentication/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  user: User;
  ngUnsubscribe = new Subject();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.user = authenticationService.currentUserValue;
    authenticationService.currentUser
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  login() {
    this.router.navigateByUrl('/home/login');
  }

  logout() {
    this.authenticationService.logout();
  }
}
