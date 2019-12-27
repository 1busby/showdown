import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../../../../../shared/models';

@Component({
  selector: 'contestant-list',
  templateUrl: './contestant-list.component.html',
  styleUrls: ['./contestant-list.component.scss']
})
export class ContestantListComponent {
  @Input() contestants: IUser[];
  @Output() newContestantsEmitter = new EventEmitter<IUser[]>();

  newContestantName = '';

  addContestant() {
    if (this.newContestantName.length < 1) {
      return;
    }
    this.contestants = [
      ...this.contestants,
      {
        name: this.newContestantName
      } as IUser
    ];
    this.newContestantName = '';
  }
}
