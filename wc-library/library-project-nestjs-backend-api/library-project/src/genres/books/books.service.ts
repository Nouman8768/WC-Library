import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, bookdocument } from './booksschema';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly book_model: Model<bookdocument>,
  ) {}

  async getallbooks() {
    return this.book_model.find();
  }
  async addbooks(book) {
    const newbook = new this.book_model(book);
    return newbook.save();
  }
  async putupdatebooks(id: string, book: bookdocument) {
    const a = await this.book_model.findById(id);
    if (a) {
      console.log(a);
      return await this.book_model.updateOne({ _id: id }, book);
    }
  }
  async patchupdatebooks(id: Book, book: bookdocument) {
    return await this.book_model.updateOne({ id }, book);
  }
  async deletebooks(id: string) {
    const a = await this.book_model.findById(id);
    if (a) {
      return await this.book_model.deleteOne({ _id: id });
    }
  }
  // async deletebooks(id: string) {
  //   return await this.book_model.deleteOne({ id });
  // }
}
