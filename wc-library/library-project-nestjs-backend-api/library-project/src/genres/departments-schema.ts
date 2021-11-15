import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Department {
    @Prop()
    name: string
    @Prop()
    floor: string
    @Prop()
    dep_number: number
    @Prop()
    shelves: number
}

export const departmentschema = SchemaFactory.createForClass(Department)
export type departmentdocument = Department & Document