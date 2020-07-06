import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

import { MatchContainer } from '@app/core';

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent implements OnChanges {
  @Input() matches: Partial<MatchContainer>[] = [];

  localMatchList: Partial<MatchContainer>[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.buildList();
  }

  buildList(): void {
    this.localMatchList = [];
    this.matches.forEach((match) => {
      this.localMatchList.push(match);
    });
  }

  trackById(index: number, match: MatchContainer): string {
    return match._id;
  }
}
