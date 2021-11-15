import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoanedBook, loanedbookdocument } from './loanedbook_schema';

@Injectable()
export class LoanedbooksService {
    constructor(@InjectModel(LoanedBook.name) private readonly loaned_book_model: Model<loanedbookdocument>) { }

    async getall_Loaned_books() {
        return this.loaned_book_model.find();
    }
    async add_Loaned_books(book) {
        const new_Loaned_book = new this.loaned_book_model(book)
        return new_Loaned_book.save()
    }
    async putupdate_Loaned_book(id: string, book: loanedbookdocument) {
        return await this.loaned_book_model.findByIdAndUpdate(id, book)
    }
    async patchupdate_Loaned_book(id: string, book: loanedbookdocument) {
        return await this.loaned_book_model.findByIdAndUpdate(id, book)
    }
    async delete_Loaned_books(id: string) {
        return await this.loaned_book_model.findByIdAndDelete(id)
    }


}
