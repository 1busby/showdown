import * as mongoose from 'mongoose';
import mongodb = require('mongodb');

export const TournamentSchema = new mongoose.Schema({
  name: String,
  contestantCount: Number,
  contestants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdOn: Date,
  updatedOn: Date,
  linkCode: String,
  anonymousContestants: [
    { eventId: String, name: String, seed: Number, points: Number },
  ],
});
