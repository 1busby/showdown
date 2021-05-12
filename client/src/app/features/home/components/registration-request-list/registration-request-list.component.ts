import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IRegistrationRequest } from '@app/shared';

@Component({
  selector: 'sd-registration-request-list',
  templateUrl: './registration-request-list.component.html',
  styleUrls: ['./registration-request-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationRequestListComponent {
  @Input() requests: Partial<IRegistrationRequest>[] = [];
  @Output() approvalDecisionEmitter: EventEmitter<{ request: IRegistrationRequest, isApproved: boolean }> = new EventEmitter<{ request: IRegistrationRequest, isApproved: boolean }>();

  constructor() {}

  trackById(index: number, request: IRegistrationRequest): string {
    return request._id;
  }
}
