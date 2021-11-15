import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './genres/library.module';
import { BooksModule } from './genres/books/books.module';
import { MembersModule } from './visitors/members/members.module';

@Module({
  imports: [MembersModule,LibraryModule, MongooseModule.forRoot("mongodb://localhost:27017/WC-Library"), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
