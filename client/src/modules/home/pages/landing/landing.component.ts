import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppStore } from '../../../../shared/app.store';
import { BehaviorSubject } from 'rxjs';
import { ITournament } from '../../../../../../shared/models';
import { TournamentDataService } from 'src/shared/data/tournament/tournament.data.service';

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
    debugger
    this.tournamentDataService.getTournamentFromId(tournament.id);
    this.router.navigateByUrl('/tournament/create');
  }
}
