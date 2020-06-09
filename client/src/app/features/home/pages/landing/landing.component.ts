import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { AppStore, TournamentDataService } from '@app/core';
import { ITournament } from '../../../../../../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  allTournaments: BehaviorSubject<Partial<ITournament>[]>;

  constructor(private router: Router, private appStore: AppStore, private tournamentDataService: TournamentDataService) {
    this.tournamentDataService.getAllTournaments();
    this.allTournaments = appStore.allTournaments;
  }

  createTournament() {
    this.router.navigateByUrl('/tournament/create');
  }

  viewTournament(tournament: ITournament) {
    // this.tournamentDataService.getTournamentFromId(tournament.id);
    if (!tournament.linkCode) {
      return;
    }
    this.router.navigateByUrl(`/tournament/${tournament.linkCode}/view`);
  }
}
