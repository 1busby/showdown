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
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { MatchContainer, AppStore, BracketHandler } from '@app/core';
import { ITournament } from '@app/shared';

@Component({
  selector: 'bracket-view',
  templateUrl: './bracket-view.component.html',
  styleUrls: ['./bracket-view.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketViewComponent
  implements OnChanges, AfterViewInit, OnDestroy {
  private ngUnsubscribe = new Subject<any>();
  showingModal = false;
  matches: any[]; //BehaviorSubject<MatchContainer[]>;
  losersMatches: any[]; // BehaviorSubject<MatchContainer[]>;
  bracketSide: 'winners' | 'losers' = 'winners';
  pos = { top: 0, left: 0, x: 0, y: 0 };
  isMouseDown = false;

  @Input() tournament: ITournament;
  @Output()
  showMatchDetailsEmitter: EventEmitter<MatchContainer> = new EventEmitter<MatchContainer>();

  @ViewChild('bracketViewContainer') bracketViewContainer: ElementRef;

  constructor(
    private bracketHandler: BracketHandler,
    private appStore: AppStore,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('LOOK BracketViewComponent ngOnChanges');
    if (changes.tournament.firstChange) return;
    const matches = this.bracketHandler.createBracket(this.tournament);
    this.appStore.setMatchContainers(matches.matches, matches.losersMatches);
  }

  ngAfterViewInit() {
    this.appStore.getWinnersMatchContainers().subscribe((matches) => {
      this.matches = null;
      this.matches = matches;
      this.changeDetectorRef.detectChanges();
    });
    this.appStore.getLosersMatchContainers().subscribe((matches) => {
      this.losersMatches = null;
      this.losersMatches = matches;
      this.changeDetectorRef.detectChanges();
    });
    this.bracketHandler.setContainerDimensions(
      this.bracketViewContainer.nativeElement.offsetWidth,
      this.bracketViewContainer.nativeElement.offsetHeight
    );

    const matches = this.bracketHandler.createBracket(this.tournament);
    this.appStore.setMatchContainers(matches.matches, matches.losersMatches);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changeBracketSide(side: 'winners' | 'losers') {
    this.bracketSide = side;
  }

  public trackMatch(index: number, item: MatchContainer) {
    return item._id;
  }

  mouseDown(e) {
    this.isMouseDown = true;
    this.bracketViewContainer.nativeElement.style.cursor = 'grabbing';
    this.bracketViewContainer.nativeElement.style.userSelect = 'none';
    this.pos = {
      // The current scroll
      left: this.bracketViewContainer.nativeElement.scrollLeft,
      top: this.bracketViewContainer.nativeElement.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
  }

  mouseMove(e) {
    if (!this.isMouseDown) return;
    // How far the mouse has been moved
    const dx = e.clientX - this.pos.x;
    const dy = e.clientY - this.pos.y;

    this.bracketViewContainer.nativeElement.scrollTop = this.pos.top - dy;
    this.bracketViewContainer.nativeElement.scrollLeft = this.pos.left - dx;
  }

  mouseUp() {
    this.isMouseDown = false;
    this.bracketViewContainer.nativeElement.style.cursor = 'grab';
  }
}
