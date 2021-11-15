import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Visitors, visitorsdocument } from './visitors_schema';

@Injectable()
export class VisitorsService {
    constructor(@InjectModel(Visitors.name) private readonly visitor_modle: Model<visitorsdocument>) { }


    async getallvisitors() {
        return this.visitor_modle.find();
    }
    async getvisitorbyid(visID){
        return this.visitor_modle.findById(visID)
    }
    async addvisitor(visitor) {
        const newvisitor = new this.visitor_modle(visitor)
        return newvisitor.save()
    }
    async putupdatevisitor(id: string, visitor: visitorsdocument) {
        return await this.visitor_modle.findByIdAndUpdate(id, visitor)
    }
    async patchupdatevisitor(id: string, visitor: visitorsdocument) {
        return await this.visitor_modle.findByIdAndUpdate(id, visitor)
    }
    async deletevisitor(id: string) {
        return await this.visitor_modle.findByIdAndDelete(id)
    }

}
