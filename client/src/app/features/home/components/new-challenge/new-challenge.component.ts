import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';

import { AppStore, BracketHandler } from '@app/core';

@Component({
  selector: 'sd-new-challenge',
  templateUrl: './new-challenge.component.html',
  styleUrls: ['./new-challenge.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChallengeComponent
  implements OnDestroy {
  private ngUnsubscribe = new Subject<any>();

  wager = 0;

  @ViewChild('bracketViewContainer') bracketViewContainer: ElementRef;

  constructor(
    private bracketHandler: BracketHandler,
    private appStore: AppStore,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
