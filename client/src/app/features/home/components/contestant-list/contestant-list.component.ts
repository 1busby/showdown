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
  @Output() removeContestantEmitter = new EventEmitter<{ index: number, contestant: Partial<IContestant> }>();

  newContestantForm = new FormGroup({
    name: new FormControl(''),
  });
  localContestantList: Partial<IContestant>[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('LOOK ContestantListComponent : ngOnChanges');
    this.buildList();
  }

  buildList() {
    console.log('LOOK ContestantListComponent : buildList');
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
    console.log('LOOK ContestantListComponent : addContestant');
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

  removeContestant(index: number, contestant: Partial<IContestant>) {
    this.removeContestantEmitter.emit({
      index,
      contestant
    });
  }

  trackById(index: number, contestant: IContestant): string {
    return contestant.name;
  }
}
