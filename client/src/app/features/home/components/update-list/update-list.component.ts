import { Component, Input } from '@angular/core';

import { IUpdate } from '@app/shared';

@Component({
  selector: 'sd-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss'],
})
export class UpdateListComponent {
  @Input() updates: Partial<IUpdate>[] = [];

  // localMatchList: Partial<MatchContainer>[] = [];

  constructor() {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.buildList();
  // }

  // buildList(): void {
  //   if (this.updates) {
  //     this.localMatchList = [];
  //     this.updates.forEach((match) => {
  //       this.localMatchList.push(match);
  //     });
  //   }
  // }

  trackById(index: number, update: IUpdate): string {
    return update._id;
  }
}
