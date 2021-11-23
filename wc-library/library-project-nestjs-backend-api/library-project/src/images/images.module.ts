import { Module } from '@nestjs/common';
import { BooksModule } from 'src/genres/books/books.module';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
  imports: [BooksModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
