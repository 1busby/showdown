import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

import { MatchDetailDialogComponent } from '../components/match-detail-dialog/match-detail-dialog.component';
import { MatchContainer, EditTournamentGQL } from '@app/core';

@Injectable()
export class MatchService {

  constructor(private dialog: MatDialog, private editTournamentGql: EditTournamentGQL) {
  }

  showMatchDetails(match: MatchContainer, _id) {
    const dialogRef = this.dialog.open(MatchDetailDialogComponent, {
      autoFocus: false,
      data: {
        match,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((updatedMatch: MatchContainer) => {
        if (updatedMatch) {
          this.editTournamentGql.mutate({ _id, matches: [updatedMatch.getData()] }).pipe(first()).subscribe();
        }
      });
  }
}
