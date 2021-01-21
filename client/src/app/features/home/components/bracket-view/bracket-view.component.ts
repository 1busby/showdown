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
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { MatchContainer, AppStore, BracketHandler } from '@app/core';
import { ITournament } from '@app/shared';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'bracket-view',
  templateUrl: './bracket-view.component.html',
  styleUrls: ['./bracket-view.component.scss'],
})
export class BracketViewComponent
  implements OnChanges, AfterViewInit, OnDestroy {
  private ngUnsubscribe = new Subject<any>();
  showingModal = false;
  matches: BehaviorSubject<MatchContainer[]>;
  losersMatches: BehaviorSubject<MatchContainer[]>;
  bracketSide: 'winners' | 'losers' = 'winners';

  @Input() tournament: ITournament;
  @Output()
  showMatchDetailsEmitter: EventEmitter<MatchContainer> = new EventEmitter<MatchContainer>();

  @ViewChild('bracketViewContainer') bracketViewContainer: ElementRef;

  constructor(
    private bracketHandler: BracketHandler,
    private appStore: AppStore,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit() {
    this.appStore
      .getWinnersMatchContainers()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.changeDetectorRef.detectChanges();
      });
    this.appStore
      .getLosersMatchContainers()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.changeDetectorRef.detectChanges();
      });
    this.matches = this.appStore.getWinnersMatchContainers();
    this.losersMatches = this.appStore.getLosersMatchContainers();
    this.bracketHandler.setContainerDimensions(
      this.bracketViewContainer.nativeElement.offsetWidth,
      this.bracketViewContainer.nativeElement.offsetHeight
    );
    this.bracketHandler.createBracket(this.tournament);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changeBracketSide(side: 'winners' | 'losers') {
    this.bracketSide = side;
  }
}
