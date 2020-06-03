import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: LandingComponent },
    { path: 'tournament/:linkCode/view', component: TournamentComponent },
    { path: 'tournament/create', component: CreateTournamentComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
