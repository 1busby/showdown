import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AlertComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AuthenticationService, AlertService]
})
export class AuthModule {}
