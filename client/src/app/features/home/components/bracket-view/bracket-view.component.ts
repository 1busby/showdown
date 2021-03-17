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
import { Subject } from 'rxjs';

import { MatchContainer, AppStore, BracketHandler } from '@app/core';
import { ITournament } from '@app/shared';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'bracket-view',
  templateUrl: './bracket-view.component.html',
  styleUrls: ['./bracket-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  @ViewChild('lineCanvasLosers') lineCanvasLosers: ElementRef;

  constructor(
    private bracketHandler: BracketHandler,
    private appStore: AppStore,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('LOOK BracketViewComponent ngOnChanges ', this.tournament);
    if (changes.tournament.firstChange) return;
    console.log('NOT FIRST CHANGE');
    const matches = this.bracketHandler.createBracket(this.tournament);
    this.appStore.setMatchContainers(matches.matches, matches.losersMatches);
  }

  ngAfterViewInit() {
    this.appStore.getWinnersMatchContainers().pipe(takeUntil(this.ngUnsubscribe)).subscribe((m) => {
      this.matches = m;
      const ctx = this.lineCanvas.nativeElement.getContext('2d');
      if (!this.matches) return;
      this.matches.forEach((match: MatchContainer) => {
        if (match.highMatch && match.highMatch.hasLowSeed) {
          ctx.beginPath();
          const from = match.highMatch.getLineConnectionPoint('next');
          const to = match.getLineConnectionPoint('high');
          const midX = from.x + (to.x - from.x) / 2;
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(
            midX,
            from.y
          );
          ctx.lineTo(
            midX,
            to.y
          );
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
          console.log('LOOK highMatch from ', from);
          console.log('LOOK highMatch to ', to);
        }
        if (match.lowMatch) {
          ctx.beginPath();
          const from = match.lowMatch.getLineConnectionPoint('next');
          const to = match.getLineConnectionPoint('low');
          const midX = from.x + (to.x - from.x) / 2;
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(
            midX,
            from.y
          );
          ctx.lineTo(
            midX,
            to.y
          );
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        }
      });
      this.changeDetectorRef.detectChanges();
    });
    this.appStore.getLosersMatchContainers().pipe(takeUntil(this.ngUnsubscribe)).subscribe((m) => {
      this.losersMatches = null;
      this.losersMatches = m;
      // const ctx = this.lineCanvasLosers.nativeElement.getContext('2d');
      // if (!this.losersMatches) return;
      // this.losersMatches.forEach((match: MatchContainer) => {
      //   if (match.highMatch && match.highMatch.hasLowSeed) {
      //     ctx.beginPath();
      //     const from = match.highMatch.getLineConnectionPoint('next');
      //     ctx.moveTo(from.x, from.y);
      //     const to = match.getLineConnectionPoint('high');
      //     ctx.lineTo(to.x, to.y);
      //     ctx.stroke();
      //     console.log('LOOK highMatch from ', from);
      //     console.log('LOOK highMatch to ', to);
      //   }
      //   if (match.lowMatch) {
      //     ctx.beginPath();
      //     const from = match.lowMatch.getLineConnectionPoint('next');
      //     ctx.moveTo(from.x, from.y);
      //     const to = match.getLineConnectionPoint('low');
      //     ctx.lineTo(to.x, to.y);
      //     ctx.stroke();
      //   }
      // });
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
