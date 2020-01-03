import * as mongoose from 'mongoose';
import mongodb = require('mongodb');

export const TournamentSchema = new mongoose.Schema({
  name: String,
  email: String,
  firstName: String,
  lastName: String,
  teams: mongodb.ObjectID,
  createdOn: Date,
  updatedOn: Date,
});
