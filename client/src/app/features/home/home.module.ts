import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { ContestantListComponent } from './components/contestant-list/contestant-list.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';
import { TournamentCardComponent } from './components/tournament-card/tournament-card.component';
import { QuickJoinDialogComponent } from './components/quick-join-dialog/quick-join-dialog.component';
import { EditAccessDialogComponent } from './components/edit-access-dialog/edit-access-dialog.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { BracketViewComponent } from './components/bracket-view/bracket-view.component';
import { MatchCardComponent } from './components/match-card/match-card.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [
    MatchCardComponent,
    HomeComponent,
    LandingComponent,
    TournamentComponent,
    CreateTournamentComponent,
    ContestantListComponent,
    TournamentCardComponent,
    QuickJoinDialogComponent,
    EditAccessDialogComponent,
    MatchListComponent,
    BracketViewComponent
  ],
  bootstrap: [QuickJoinDialogComponent, EditAccessDialogComponent]
})
export class HomeModule {}
