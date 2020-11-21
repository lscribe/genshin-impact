import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  element: { type: String, required: true },
  weapon: { type: String, required: true },
  city: { type: String, required: true },
});
