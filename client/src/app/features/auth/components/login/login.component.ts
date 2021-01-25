import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onCancel() {
    this.router.navigateByUrl('/');
  }

  goToSignup() {
    this.router.navigateByUrl('/auth/signup');
  }

  processLogin() {
    if (this.username && this.username.length > 0) {
      this.authService.login(null, this.username).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
