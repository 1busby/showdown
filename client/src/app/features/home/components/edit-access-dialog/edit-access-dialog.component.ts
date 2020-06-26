import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  tournamentId: string;
  tournamentName: string;
  editAccessCode: string;
  incorrectAccessCode: boolean;
}

@Component({
  selector: 'edit-access-dialog',
  templateUrl: 'edit-access-dialog.component.html',
})
export class EditAccessDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditAccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    data.editAccessCode = '';
    data.incorrectAccessCode = false;
  }

  checkAccess() {
    this.dialogRef.close(this.data.editAccessCode);
  }
}
