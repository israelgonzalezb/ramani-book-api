import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Review } from '../reviews/review.schema';

@Schema()
export class Book {
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  bookName: string;
  @Prop()
  author: string;
  @Prop()
  releaseDate: MongooseSchema.Types.Date;
  @Prop()
  genre: string;
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Review' }] })
  reviews: Review[]; // Array of Review Schema
}

export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book);
