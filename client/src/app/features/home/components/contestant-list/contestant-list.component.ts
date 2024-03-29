import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { IContestant } from '@app/shared';

@Component({
  selector: 'contestant-list',
  templateUrl: './contestant-list.component.html',
  styleUrls: ['./contestant-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContestantListComponent implements OnChanges {
  @Input() interactionMode: 'view' | 'edit' = 'view';
  @Input() isOrderedBySeed = true;
  @Input() contestantCount = 0;
  @Input() contestants: Partial<IContestant>[] = [];
  @Output() newContestantEmitter = new EventEmitter<Partial<IContestant>>();
  @Output() removeContestantEmitter = new EventEmitter<{
    index: number;
    contestant: Partial<IContestant>;
  }>();
  @Output() rearrangedContestantsEmitter = new EventEmitter<
    Partial<IContestant>[]
  >();

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
    };
    this.newContestantEmitter.emit(newContestant);
    this.newContestantForm.controls.name.setValue('');
  }

  removeContestant(index: number, contestant: Partial<IContestant>) {
    this.removeContestantEmitter.emit({
      index,
      contestant,
    });
  }

  trackById(index: number, contestant: IContestant): string {
    return contestant.name;
  }

  dragStarted(event) {
    navigator.vibrate(25);
  }

  contestantDrop(event: CdkDragDrop<IContestant[]>) {
    console.log('drop event is ', event);
    moveItemInArray(
      this.localContestantList,
      event.previousIndex,
      event.currentIndex
    );
    this.rearrangeSeeds(this.localContestantList);
    this.rearrangedContestantsEmitter.emit(this.localContestantList);
  }

  rearrangeSeeds(contestants: Partial<IContestant>[]) {
    contestants.forEach((contestant, index) => {
      contestant.seed = index + 1;
    });
  }

  shuffleSeeds() {
    let currentIndex = this.localContestantList.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.localContestantList[currentIndex];
      this.localContestantList[currentIndex] = this.localContestantList[
        randomIndex
      ];
      this.localContestantList[randomIndex] = temporaryValue;
    }

    this.rearrangeSeeds(this.localContestantList);
    this.rearrangedContestantsEmitter.emit(this.localContestantList);
  }
}
