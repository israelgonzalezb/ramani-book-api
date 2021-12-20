import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  review: string;
  @Prop()
  rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
