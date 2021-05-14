import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { MatchContainer } from '@app/core';
import { IContestant, IUser } from '@app/shared';

@Component({
  selector: 'sd-contestant-banner',
  templateUrl: './contestant-banner.component.html',
  styleUrls: ['./contestant-banner.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContestantBannerComponent implements OnInit {
  @Input() contestant: IUser & IContestant;

  ngOnInit() {}
}
