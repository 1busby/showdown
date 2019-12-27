import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: LandingComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
