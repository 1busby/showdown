import { IContestant } from './contestant.interface';

export interface IRegistrationRequest {
  _id: string;
  contestant?: IContestant
  isReviewed?: boolean;
  isApproved?: boolean;
}