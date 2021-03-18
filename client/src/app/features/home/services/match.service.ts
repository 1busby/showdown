import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatchDetailDialogComponent } from '../components/match-detail-dialog/match-detail-dialog.component';
import { MatchContainer } from '@app/core';
import { ITournament } from '@app/shared';

@Injectable()
export class MatchService {
  constructor(
    private dialog: MatDialog
  ) {}

  showMatchDetails(match: MatchContainer, allowEdit: boolean, tournament: Partial<ITournament>) {
    const dialogRef = this.dialog.open(MatchDetailDialogComponent, {
      autoFocus: false,
      data: {
        match,
        allowEdit,
        hasStarted: tournament.hasStarted,
        tournamentId: tournament._id
      },
      panelClass: 'match-detail-panel'
    });

    return dialogRef.afterClosed();
  }
}
