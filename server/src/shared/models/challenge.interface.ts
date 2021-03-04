import { IUser, IUpdate } from './';

export interface IChallenge {
  _id: string;
  contestants?: IUser;
  challenger?: IUser;
  defender?: IUser;
  createdOn?: Date;
  updatedOn?: Date;
  expiresOn?: Date;
  linkCode?: string;
  updates?: IUpdate[];
  setCount?: number;
  consensusReached?: boolean;
  isChallengerReviewing?: boolean;
  isDefenderReviewing?: boolean;
}
