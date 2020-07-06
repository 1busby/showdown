import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { IContestant } from '@app/shared';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'contestant-list',
  templateUrl: './contestant-list.component.html',
  styleUrls: ['./contestant-list.component.scss'],
})
export class ContestantListComponent implements OnChanges {
  @Input() interactionMode: 'view' | 'edit' = 'view';
  @Input() isOrderedBySeed = true;
  @Input() contestantCount = 0;
  @Input() contestants: Partial<IContestant>[] = [];
  @Output() newContestantEmitter = new EventEmitter<Partial<IContestant>>();

  newContestantForm = new FormGroup({
    name: new FormControl(''),
  });
  localContestantList: Partial<IContestant>[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.buildList();
  }

  buildList() {
    this.localContestantList = [];
    this.contestants.forEach((contestant) => {
      this.localContestantList.push(contestant);
    });
    for (let i = 0; i < this.contestantCount - this.contestants.length; i++) {
      this.localContestantList.push({});
    }
    if (this.isOrderedBySeed) {
      this.localContestantList.sort((a, b) => a.seed - b.seed);
    }
  }

  addContestant() {
    if (this.newContestantForm.value.name.length < 1) {
      return;
    }
    const newContestant = {
      name: this.newContestantForm.value.name,
      seed: this.localContestantList.length + 1
    };
    this.newContestantEmitter.emit(newContestant);
    this.newContestantForm.controls.name.setValue('');
  }

  trackById(index: number, contestant: IContestant): string {
    return contestant._id;
  }
}
