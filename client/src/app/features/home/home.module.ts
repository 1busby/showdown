import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { BracketModule } from '../bracket/bracket.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { ContestantListComponent } from './components/contestant-list/contestant-list.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';
import { TournamentCardComponent } from './components/tournament-card/tournament-card.component';
import { QuickJoinDialogComponent } from './components/quick-join-dialog/quick-join-dialog.component';
import { EditAccessDialogComponent } from './components/edit-access-dialog/edit-access-dialog.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, BracketModule],
  declarations: [
    HomeComponent,
    LandingComponent,
    TournamentComponent,
    CreateTournamentComponent,
    ContestantListComponent,
    TournamentCardComponent,
    QuickJoinDialogComponent,
    EditAccessDialogComponent
  ],
  bootstrap: [QuickJoinDialogComponent, EditAccessDialogComponent]
})
export class HomeModule {}
