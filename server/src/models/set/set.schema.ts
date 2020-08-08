import * as mongoose from 'mongoose';

export const setSchema = new mongoose.Schema({
  orderNumber: Number,
  highSeedScore: Number,
  lowSeedScore: Number,
  outcome: String,
  startedOn: Date,
  completedOn: Date,
  notes: String,
});
