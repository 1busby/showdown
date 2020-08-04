import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  ElementRef,
  Self
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MatchContainer, AppStore, BracketHandler } from '@app/core';
import { ITournament } from '@app/shared';
import { MatDialog } from '@angular/material/dialog';
import { MatchDetailDialogComponent } from '../match-detail-dialog/match-detail-dialog.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'bracket-view',
  templateUrl: './bracket-view.component.html',
  styleUrls: ['./bracket-view.component.scss']
})
export class BracketViewComponent implements OnChanges, OnInit {
  showingModal = false;

  matches: BehaviorSubject<MatchContainer[]>;

  @Input() tournament: ITournament;

  constructor(
    @Self() private element: ElementRef,
    private bracketHandler: BracketHandler,
    private appStore: AppStore,
    public dialog: MatDialog,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit() {
    this.matches = this.appStore.getMatchContainers();
    this.bracketHandler.setContainerDimensions(
      586,
      619
    );
    this.bracketHandler.createBracket(this.tournament);
  }

  showMatchDetails(match: MatchContainer) {
    const dialogRef = this.dialog.open(MatchDetailDialogComponent, {
      data: {
        match,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((match) => {
        console.log('Match Dialog ');
      });
  }
}
