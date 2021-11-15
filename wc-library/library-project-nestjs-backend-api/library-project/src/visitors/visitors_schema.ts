import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Visitors {
    @Prop({ required:true })
    name: string
    @Prop({ required:true })
    address: string
    @Prop({ required:true })
    checkin_time: string
    @Prop({ required:true })
    checkout_time: string
    @Prop({ required:true })
    per_hour_charge: string
    @Prop({ required:true })
    total_charge: string
    @Prop({ required:true })
    member: boolean
}

export const visitorschema = SchemaFactory.createForClass(Visitors)
export type visitorsdocument = Visitors & Document
