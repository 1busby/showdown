import * as mongoose from 'mongoose';

export const pushSubscriptionSchema = new mongoose.Schema({
  endpoint: String,
  expirationTime: String,
  encryptionKey: String,
  authSecret: String,
});
