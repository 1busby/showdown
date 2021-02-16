import * as mongoose from 'mongoose';

export const UpdateSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdOn: Date
});
