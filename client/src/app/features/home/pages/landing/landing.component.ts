import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { TournamentsGQL } from '@app/core';
import { ITournament } from '@app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  allTournaments: Partial<ITournament>[];

  constructor(private router: Router, private tournamentsGql: TournamentsGQL) {
    this.tournamentsGql
      .fetch()
      .pipe(first())
      .subscribe((result) => {
        this.allTournaments = result.data.tournaments;
      });
  }

  createTournament() {
    this.router.navigateByUrl('/tournament/create');
  }

  viewTournament(tournament: ITournament) {
    if (!tournament.linkCode) {
      return;
    }
    this.router.navigateByUrl(`/tournament/${tournament.linkCode}/view`);
  }

  trackByFn(index, tournament) {
    return tournament.id;
  }
}
