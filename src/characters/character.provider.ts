import { CharacterSchema } from './schemas/character.schema';
import { Mongoose } from 'mongoose';

export const characterProvider = [
  {
    provide: 'CHARACTER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Character', CharacterSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
