import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), BooksModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
