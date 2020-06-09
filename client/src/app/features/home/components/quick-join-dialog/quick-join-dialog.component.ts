import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  tournamentName: string;
  contestant: {
    id: string;
    name: string;
  };
}

@Component({
  selector: 'quick-join-dialog',
  templateUrl: 'quick-join-dialog.component.html',
})
export class QuickJoinDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<QuickJoinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.contestant = {
      id: null,
      name: null
    };
  }
}
