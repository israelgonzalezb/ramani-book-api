import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Review, ReviewSchema } from './review.schema';
import { ReviewService } from './review/review.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { review: Review.review, rating: Review.rating, schema: ReviewSchema },
    ]),
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
