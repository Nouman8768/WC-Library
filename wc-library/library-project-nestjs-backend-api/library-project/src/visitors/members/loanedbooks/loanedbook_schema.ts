import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class LoanedBook{
    @Prop({required:true})
    name:string[]
    @Prop({required:true})
    genre:string[]
    @Prop({required:true})
    book_loaned_date:string[]
    @Prop({required:true})
    book_return_date:string[]
    @Prop({required:true})
    member_name:string


}
export const loanedbookschema=SchemaFactory.createForClass(LoanedBook)
export type loanedbookdocument=LoanedBook & Document
