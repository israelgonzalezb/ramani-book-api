import { Module } from '@nestjs/common';
import { BookService } from './book/book.service';

@Module({
  providers: [BookService]
})
export class BooksModule {}
