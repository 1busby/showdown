import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'sd-push-subscriptions-dialog',
  templateUrl: 'push-subscriptions-dialog.component.html',
})
export class PushSubscriptionsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PushSubscriptionsDialogComponent>,
  ) {
  }

  checkAccess() {
    this.dialogRef.close(true);
  }
}
