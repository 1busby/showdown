import * as mongoose from 'mongoose';
import mongodb = require('mongodb');

const anonymousContestantSchema = new mongoose.Schema({
  eventId: String,
  name: String,
  seed: Number,
  points: Number,
});

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
  anonymousContestants: [anonymousContestantSchema],
});
