import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppStore, AuthService, AlertService } from '@app/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  private ngUnsubscribe = new Subject<any>();

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private authenticationService: AuthService,
    public appStore: AppStore,
    private alertService: AlertService
  ) {
    this.alertService.getAlert().pipe(takeUntil(this.ngUnsubscribe)).subscribe(alert => {
      if (!alert) {
        return;
      }
      this._snackBar.open(alert.text, null, {
        duration: 2000,
        panelClass: `${alert.type}-snackbar`
      });
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  login() {
    this.router.navigateByUrl('/auth/login');
  }

  logout() {
    this.authenticationService.logout();
  }
}
