import { Document } from 'mongoose';

export interface IChat  extends Document {
    user: string;
    message: string;
    date: Date;
  }
