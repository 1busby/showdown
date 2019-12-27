import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/shared/shared.module';
import { BracketModule } from '../bracket/bracket.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { ContestantListComponent } from './components/contestant-list/contestant-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    TournamentComponent,
    ContestantListComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, BracketModule]
})
export class HomeModule {}
