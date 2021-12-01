import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
@Schema()
export class Book {
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  author: string;
  @ApiProperty()
  @Prop()
  price: number;
  @ApiProperty()
  @Prop()
  genres_name: string;
  @ApiProperty()
  @Prop()
  coverimage: string;
}

export const bookschema = SchemaFactory.createForClass(Book);
export type bookdocument = Book & Document;
