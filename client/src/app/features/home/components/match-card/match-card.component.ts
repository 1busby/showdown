import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { MatchContainer } from '@app/core';

@Component({
  selector: 'match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchCardComponent implements OnInit, OnChanges {
  @Input() match: Partial<MatchContainer>;

  highSetCount: number;
  lowSetCount: number;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('LOOK MatchCardComponent ngOnChanges');
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

  getPlaceholderText(seed: 'high' | 'low') {
    if (seed === 'high') {
      if (this.match.highMatch) {
        return this.match.highSeedSource === 'winner' ? `Winner of ${this.match.highMatch.matchNumber + 1}` : `Loser of ${this.match.highMatch.matchNumber + 1}`;
      } else {
        return 'Contestant TBD';
      }
    } else {
      if (this.match.lowMatch) {
        return this.match.lowSeedSource === 'loser' ? `Loser of ${this.match.lowMatch.matchNumber + 1}` : `Winner of ${this.match.lowMatch.matchNumber + 1}`;
      } else {
        return 'Contestant TBD';
      }
    }
  }
}
