import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  OnInit,
} from '@angular/core';

import { MatchContainer } from '@app/core';

@Component({
  selector: 'match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit, OnChanges {
  @Input() match: Partial<MatchContainer>;

  highSetCount: number;
  lowSetCount: number;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.highSetCount = 0;
    this.lowSetCount = 0;
    this.match.sets.forEach((set) => {
      if (set.outcome === 'high') {
        this.highSetCount++;
      } else if (set.outcome === 'low') {
        this.lowSetCount++;
      }
    });
  }
}
