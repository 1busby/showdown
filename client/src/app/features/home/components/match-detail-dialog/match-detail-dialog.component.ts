import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AppStore, EditTournamentGQL, MatchContainer } from '@app/core';
import { first } from 'rxjs/operators';

import { IMatch } from '@app/shared';

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
    private editTournamentGql: EditTournamentGQL,
    private appStore: AppStore,
    private changeDetector: ChangeDetectorRef
  ) {
    this.match = data.match.getData();
  }

  save() {
    this.editTournamentGql
      .mutate({ _id: this.data.tournamentId, matches: [this.match] })
      .pipe(first())
      .subscribe((result) => {
        console.log('LOOK Tournament edited ', result);
        const updatedMatch = result.data.updateTournament.matches.find(
          (match) => match._id === this.data.match._id
        );
        this.data.match.setData({
          ...this.match,
          ...updatedMatch,
        });
        if (updatedMatch.winnerSeed) {
          this.data.match.updateWinner(updatedMatch.winnerSeed);
          this.appStore.updateMatchContainer(updatedMatch);
          // this.changeDetector.detectChanges();

          this.appStore.setMatchContainers(
            this.appStore.getWinnersMatchContainers().value,
            this.appStore.getLosersMatchContainers().value
          );
          this.dialogRef.close({
            match: this.data.match,
          });
        }
      });
  }
}
