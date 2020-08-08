import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatchDetailDialogComponent } from '../components/match-detail-dialog/match-detail-dialog.component';
import { MatchContainer } from '@app/core';

@Injectable()
export class MatchService {
  constructor(
    private dialog: MatDialog
  ) {}

  showMatchDetails(match: MatchContainer, _id) {
    const dialogRef = this.dialog.open(MatchDetailDialogComponent, {
      autoFocus: false,
      data: {
        match,
      },
    });

    return dialogRef.afterClosed();
  }
}
