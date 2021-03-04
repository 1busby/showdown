import { NgModule } from '@angular/core';
import { GravatarModule, GravatarConfig, FALLBACK, RATING } from 'ngx-gravatar';

import { SharedModule } from '@app/shared';
import { MatchService } from './services/match.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { ContestantListComponent } from './components/contestant-list/contestant-list.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';
import { TournamentCardComponent } from './components/tournament-card/tournament-card.component';
import { QuickJoinDialogComponent } from './components/quick-join-dialog/quick-join-dialog.component';
import { EditAccessDialogComponent } from './components/edit-access-dialog/edit-access-dialog.component';
import { MatchDetailDialogComponent } from './components/match-detail-dialog/match-detail-dialog.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { BracketViewComponent } from './components/bracket-view/bracket-view.component';
import { MatchCardComponent } from './components/match-card/match-card.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewChallengeComponent } from './components/new-challenge/new-challenge.component';

const gravatarConfig: GravatarConfig = {
  fallback: FALLBACK.robohash,
  rating: RATING.x,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  hasBorder: true // Set this flag to true to have a border by default
};

@NgModule({
  imports: [GravatarModule.forRoot(gravatarConfig), HomeRoutingModule, SharedModule],
  declarations: [
    HomeComponent,
    LandingComponent,
    TournamentComponent,
    CreateTournamentComponent,
    ProfileComponent,
    ContestantListComponent,
    TournamentCardComponent,
    QuickJoinDialogComponent,
    EditAccessDialogComponent,
    MatchDetailDialogComponent,
    MatchListComponent,
    BracketViewComponent,
    MatchCardComponent,
    NewChallengeComponent
  ],
  providers: [MatchService],
  bootstrap: [QuickJoinDialogComponent, EditAccessDialogComponent, MatchDetailDialogComponent, NewChallengeComponent]
})
export class HomeModule {}
