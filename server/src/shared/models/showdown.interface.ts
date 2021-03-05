import { IUser, IUpdate } from '.';

export interface IShowdown {
  _id: string;
  challenger?: Partial<IUser>;
  defender?: Partial<IUser>;
  createdOn?: Date;
  updatedOn?: Date;
  expiresOn?: Date;
  linkCode?: string;
  updates?: IUpdate[];
  setCount?: number;
  wager?: number;
  consensusReached?: boolean;
  isChallengerReviewing?: boolean;
  isDefenderReviewing?: boolean;
}
