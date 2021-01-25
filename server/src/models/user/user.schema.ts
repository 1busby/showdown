import * as mongoose from 'mongoose';
import mongodb = require('mongodb');

export const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  teams: mongodb.ObjectID,
  createdOn: Date,
  updatedOn: Date,
});
