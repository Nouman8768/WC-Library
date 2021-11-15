import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoanedBook, loanedbookdocument } from './loanedbooks/loanedbook_schema';
import { Members, membersdocument } from './member_schema';

@Injectable()
export class MembersService {
    constructor(@InjectModel(Members.name) private readonly memb_modle: Model<membersdocument>,
    @InjectModel(LoanedBook.name) private readonly loaned_book_modle: Model<loanedbookdocument>)
    { }


    async getallmembers() {
        return this.memb_modle.find();
    }
    async getmembersbyid(membID){
        return this.memb_modle.findById(membID)
    }
    async getBooksloanedbySingleMember(mem_name:string)
    {
        //return this.book_model.find({genres_id:id})
       return this.loaned_book_modle.find({member_name:mem_name})

    }
    async addmembers(member) {
        const newvisitor = new this.memb_modle(member)
        return newvisitor.save()
    }
    async putupdatemembers(id: string, member: membersdocument) {
        return await this.memb_modle.findByIdAndUpdate(id, member)
    }
    async patchupdatemembers(id: string, member: membersdocument) {
        return await this.memb_modle.findByIdAndUpdate(id, member)
    }
    async deletemembers(id: string) {
        return await this.memb_modle.findByIdAndDelete(id)
    }
}
