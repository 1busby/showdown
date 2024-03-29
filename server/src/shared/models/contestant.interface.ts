import { IUser } from './user.interface';

export interface IContestant {
  _id?: string;
  name?: string;
  seed?: number;
  points?: number;
  isRegistered?: boolean;
  profile?: IUser;
}