import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { Review, ReviewDocument } from './review.schema';
import {
  CreateReviewInput,
  ListReviewInput,
  UpdateReviewInput,
} from './review.inputs';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  create(payload: CreateReviewInput) {
    const createdReview = new this.reviewModel(payload);
    return createdReview.save();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.reviewModel.findByIdAndDelete(_id).exec();
  }
}
