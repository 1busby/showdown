import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

import { MatchContainer } from '@app/core';

@Component({
  selector: 'match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnChanges {
  @Input() match: Partial<MatchContainer>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
