import { Document } from 'mongoose';

export interface Character extends Document {
  readonly name: string;
  readonly element: string;
  readonly weapon: string;
  readonly city: string;
}