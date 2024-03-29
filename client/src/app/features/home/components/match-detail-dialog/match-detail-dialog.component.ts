import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AppStore, MatchContainer } from '@app/core';
import { first } from 'rxjs/operators';

import { IMatch } from '@app/shared';
import { ReportMatchScoreGQL } from '@app/core/data/tournament/report-match-score.gql.service';

export interface DialogData {
  match: MatchContainer;
  allowEdit: boolean;
  hasStarted: boolean;
  tournamentId: string;
}

@Component({
  selector: 'match-detail-dialog',
  templateUrl: 'match-detail-dialog.component.html',
  styleUrls: ['match-detail-dialog.component.scss'],
})
export class MatchDetailDialogComponent {
  match: IMatch;
  constructor(
    public dialogRef: MatDialogRef<MatchDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private reportMatchScoreGql: ReportMatchScoreGQL,
    private appStore: AppStore,
  ) {
    this.match = data.match.getData();
  }

  save() {
    this.match.sets.forEach((set: any) => {
      if (set.potentialOutcome) {
        set.outcome = set.potentialOutcome;
        delete set.potentialOutcome;
      }
    })

    this.reportMatchScoreGql
      .mutate({ tournamentId: this.data.tournamentId, ...this.match })
      .pipe(first())
      .subscribe((result) => {
        console.log('LOOK Tournament edited ', result);
        const updatedMatch = result.data.reportMatchScore.matches.find(
          (match) => match._id === this.data.match._id
        );
        this.data.match.setData({
          ...this.match,
          ...updatedMatch,
        });
        if (updatedMatch.winnerSeed) {
          this.data.match.updateWinner(updatedMatch.winnerSeed);
          this.appStore.updateMatchContainer(updatedMatch);
          this.dialogRef.close({
            match: this.data.match,
          });
        }
      });
  }
}
