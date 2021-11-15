import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { Book, bookschema } from './books/booksschema';
import { Department, departmentschema } from './departments-schema';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';

@Module({
  imports: [BooksModule,MongooseModule.forFeature([{
    name: Department.name,
    schema: departmentschema
  }]),
  MongooseModule.forFeature([{
    name: Book.name,
    schema: bookschema
  }]),
],
  controllers: [LibraryController],
  providers: [LibraryService]
})
export class LibraryModule { }
