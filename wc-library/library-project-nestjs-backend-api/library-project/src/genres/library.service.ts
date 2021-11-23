import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, bookdocument } from './books/booksschema';
import { Department, departmentdocument } from './departments-schema';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Department.name)
    private readonly dep_model: Model<departmentdocument>,
    @InjectModel(Book.name) private readonly book_model: Model<bookdocument>,
  ) {}

  async getalldepartments() {
    return this.dep_model.find();
  }
  async getdepartmentbyid(depID) {
    return this.dep_model.findById(depID);
  }
  async getallBooksofSingleGenere(name: string) {
    return this.book_model.find({ genres_name: name });
  }
  async adddepartment(department) {
    const newdepartment = new this.dep_model(department);
    return newdepartment.save();
  }
  async putupdatedepartment(id: string, department: departmentdocument) {
    return await this.dep_model.findByIdAndUpdate(id, department);
  }
  async patchupdatedepartment(id: string, department: departmentdocument) {
    return await this.dep_model.findByIdAndUpdate(id, department);
  }
  async deletedepartment(id: string) {
    return await this.dep_model.findByIdAndDelete(id);
  }
}
