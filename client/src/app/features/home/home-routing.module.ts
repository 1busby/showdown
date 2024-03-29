import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: LandingComponent },
    { path: 'create', component: CreateTournamentComponent },
    { path: ':linkCode', component: TournamentComponent },
    { path: ':linkCode/edit', component: CreateTournamentComponent },
    { path: 'profile/:username', component: ProfileComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
