import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { TournamentsGQL } from '@app/core';
import { ITournament, IUser } from '@app/shared';
import { UsersGQL } from '@app/core/data/user/users.gql.service';
import { RemoveTournamentGQL } from '@app/core/data/tournament/remove-tournament.gql.service';

@Component({
  selector: 'app-home-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  allTournaments: Partial<ITournament>[];
  allUsers: Partial<IUser>[];

  constructor(
    private router: Router,
    private tournamentsGql: TournamentsGQL,
    private usersGql: UsersGQL,
    private removeTournamentGql: RemoveTournamentGQL
  ) {
    this.tournamentsGql
      .fetch()
      .pipe(first())
      .subscribe((result) => {
        this.allTournaments = result.data.tournaments;
      });
    this.usersGql
      .fetch()
      .pipe(first())
      .subscribe((result) => {
        this.allUsers = result.data.users;
      });
  }

  createTournament() {
    this.router.navigateByUrl('/create');
  }

  viewTournament(tournament: ITournament) {
    if (!tournament.linkCode) {
      return;
    }
    this.router.navigateByUrl(`/${tournament.linkCode}`);
  }

  deleteTournament(_id) {
    this.removeTournamentGql.mutate({ _id }).pipe(first()).subscribe();
  }

  trackByFn(index, tournament) {
    return tournament._id;
  }
}
