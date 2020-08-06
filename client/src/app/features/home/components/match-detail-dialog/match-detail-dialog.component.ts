import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatchContainer } from '@app/core';

export interface DialogData {
  match: MatchContainer;
}

@Component({
  selector: 'match-detail-dialog',
  templateUrl: 'match-detail-dialog.component.html',
  styleUrls: ['match-detail-dialog.component.scss']
})
export class MatchDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MatchDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  save() {
    this.dialogRef.close(this.data.match);
  }
}
