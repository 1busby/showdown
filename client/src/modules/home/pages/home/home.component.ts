import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/core/authentication/services';
import { AppStore } from 'src/shared/app.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public appStore: AppStore
  ) {}

  login() {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.authenticationService.logout();
  }
}
