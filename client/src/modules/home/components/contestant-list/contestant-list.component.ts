import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IContestant } from '../../../../../../shared/models';

@Component({
  selector: 'contestant-list',
  templateUrl: './contestant-list.component.html',
  styleUrls: ['./contestant-list.component.scss']
})
export class ContestantListComponent {
  @Input() contestants: Partial<IContestant>[];
  @Output() newContestantsEmitter = new EventEmitter<IContestant[]>();

  newContestantName = '';

  addContestant() {
    if (this.newContestantName.length < 1) {
      return;
    }
    this.contestants = [
      ...this.contestants,
      {
        name: this.newContestantName
      }
    ];
    this.newContestantName = '';
  }
}
