import * as mongoose from 'mongoose';
import mongodb = require('mongodb');

export const UserSchema = new mongoose.Schema({
  username: String,
  dId: String,
  email: String,
  firstName: String,
  lastName: String,
  iconPublicAddress: String,
  teams: mongodb.ObjectID,
  createdOn: Date,
  updatedOn: Date,
  numWins: Number,
  tournaments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  }],
  pushSubscription: String,
});
