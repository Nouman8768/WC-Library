import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Members {
    @Prop({ required:true })
    name: string
    @Prop({ required:true })
    address: string
    @Prop({ required:true })
    membership_date: string
    @Prop({ required:true })
    membership_expiry_date: string
   
}

export const membersschema = SchemaFactory.createForClass(Members)
export type membersdocument = Members & Document
