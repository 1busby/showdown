import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUpdate } from '@app/shared';

@Component({
  selector: 'sd-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateListComponent {
  @Input() updates: Partial<IUpdate>[] = [];

  constructor() {}

  trackById(index: number, update: IUpdate): string {
    return update._id;
  }
}
