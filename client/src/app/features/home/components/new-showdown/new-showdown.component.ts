import {
  Component,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'sd-new-showdown',
  templateUrl: './new-showdown.component.html',
  styleUrls: ['./new-showdown.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewShowdownComponent
  implements OnDestroy {
  private ngUnsubscribe = new Subject<any>();

  @Output() challengeData: EventEmitter<any> = new EventEmitter<any>(); 
  wager = 0;

  constructor() {}

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  confirm() {
    this.challengeData.emit({
      wager: this.wager
    });
  }
}
