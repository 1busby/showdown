import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from '@app/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = null;
  email: string = null;

  isSigningUp = false;

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel() {
    this.dialogRef.close();
  }

  processLogin() {
    if (this.email && this.email.length > 0) {
      this.authService.login(this.email).then(() => {
        this.dialogRef.close();
      });
    }
  }

  processSignup() {
    if (this.email && this.email.length > 0 && this.username && this.username.length > 0) {
      this.authService.signup(this.email, this.username).then(() => {
        this.dialogRef.close();
      });
    }
  }
}
