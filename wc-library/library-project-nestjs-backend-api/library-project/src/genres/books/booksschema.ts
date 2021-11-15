import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Book {
  @Prop()
  bid: number;
  @Prop()
  name: string;
  @Prop()
  author: string;
  @Prop()
  price: number;
  @Prop()
  genres_name: string;
}

export const bookschema = SchemaFactory.createForClass(Book);
export type bookdocument = Book & Document;
