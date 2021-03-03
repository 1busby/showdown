import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IUser } from '@app/shared';

export interface DialogData {
  targetUser: IUser;
  wager: number;
}

@Component({
  selector: 'new-challenge-dialog',
  templateUrl: 'new-challenge-dialog.component.html',
  styleUrls: ['new-challenge-dialog.component.scss'],
})
export class NewChallengeComponent {
  targetUser: IUser;
  constructor(
    public dialogRef: MatDialogRef<NewChallengeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.targetUser = data.targetUser;
  }

  confirmChallenge() {

  }
}
