import {
  Component,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { RemoveTournamentGQL, TournamentsGQL } from '@app/core';
import { ITournament } from '@app/shared';

@Component({
  selector: 'tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent {
  @Input() tournaments: ITournament[]
  constructor(
    private router: Router,
    private tournamentsGql: TournamentsGQL,
    private removeTournamentGql: RemoveTournamentGQL,
  ) {}

  deleteTournament(_id) {
    this.removeTournamentGql
      .mutate(
        { _id },
        {
          // Optimistically update tournament list shown on screen
          update: (proxy, { data: { removeTournament } }: any) => {
            if (removeTournament === false) {
              return;
            }
            // Read the data from our cache for this query.
            let { tournaments }: any = proxy.readQuery({
              query: this.tournamentsGql.document,
            });
            // Add our comment from the mutation to the end.\
            tournaments = tournaments.filter(
              (m) => m._id !== _id
            );
            // Write our data back to the cache.
            proxy.writeQuery({ query: this.tournamentsGql.document, data: { tournaments } });
          },
        }
      )
      .pipe(first())
      .subscribe();
  }

  viewTournament(tournament: ITournament) {
    if (!tournament.linkCode) {
      return;
    }
    this.router.navigateByUrl(`/${tournament.linkCode}`);
  }

  openProfile(user) {
    this.router.navigateByUrl(`/profile/${user.username}`);
  }

  trackByFn(index, tournament) {
    return tournament._id;
  }
}
