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
    private appStore: AppStore
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
    // console.log('pushing MatchDetailsPage onto the stack');
    // this.navCtrl.push('MatchDetailPage', { match });
  }
}
