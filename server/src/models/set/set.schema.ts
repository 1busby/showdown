import * as mongoose from 'mongoose';

export const setSchema = new mongoose.Schema({
  highSeedScore: Number,
  lowSeedScore: Number,
  outcome: String,
  startedOn: Date,
  completedOn: Date,
  notes: String,
});
