import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TournamentComponent } from './pages/tournament/tournament.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: LandingComponent },
    { path: 'tournament', component: TournamentComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
