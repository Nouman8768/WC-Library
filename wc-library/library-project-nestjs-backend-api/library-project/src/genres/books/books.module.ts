import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesController } from 'src/images/images.controller';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, bookschema } from './booksschema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: bookschema,
      },
    ]),
  ],
  controllers: [BooksController, ImagesController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
