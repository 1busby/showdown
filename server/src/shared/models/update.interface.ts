import { IUser } from './user.interface';

export interface IUpdate {
  _id?: string;
  title?: string;
  description?: string;
  createdOn?: Date;
  notificationRecipients?: IUser[];
}
