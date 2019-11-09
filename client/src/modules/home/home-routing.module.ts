import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from 'src/core/authentication/components/login/login.component';
import { RegisterComponent } from 'src/core/authentication/components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
