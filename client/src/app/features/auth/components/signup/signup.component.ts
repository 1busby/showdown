import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username: string = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onCancel() {
    this.router.navigateByUrl('/');
  }

  goToLogin() {
    this.router.navigateByUrl('/auth/login');
  }

  processSignup() {
    
  }
}
