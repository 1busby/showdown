import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  ElementRef,
  Self,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MatchContainer, AppStore, BracketHandler } from '@app/core';
import { ITournament } from '@app/shared';

@Component({
  selector: 'bracket-view',
  templateUrl: './bracket-view.component.html',
  styleUrls: ['./bracket-view.component.scss']
})
export class BracketViewComponent implements OnChanges, AfterViewInit {
  showingModal = false;

  matches: BehaviorSubject<MatchContainer[]>;
  losersMatches: BehaviorSubject<MatchContainer[]>;

  bracketSide: 'winners' | 'losers' = 'losers';

  @Input() tournament: ITournament;
  @Output() showMatchDetailsEmitter: EventEmitter<MatchContainer> = new EventEmitter<MatchContainer>();

  @ViewChild('bracketViewContainer') bracketViewContainer: ElementRef;

  constructor(
    private bracketHandler: BracketHandler,
    private appStore: AppStore,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit() {
    this.matches = this.appStore.getMatchContainers();
    this.losersMatches = this.appStore.getLosersMatchContainers();
    this.bracketHandler.setContainerDimensions(
      this.bracketViewContainer.nativeElement.offsetWidth,
      this.bracketViewContainer.nativeElement.offsetHeight,
    );
    this.bracketHandler.createBracket(this.tournament);
  }

  changeBracketSide(side: 'winners' | 'losers') {
    this.bracketSide = side;
  }
}
