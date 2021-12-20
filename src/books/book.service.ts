import { Schema as MongooseSchema } from 'mongoose';

export class CreateBookInput {
  bookName: string;
  author: string;
  releaseDate: MongooseSchema.Types.Date;
  genre: string;
}
