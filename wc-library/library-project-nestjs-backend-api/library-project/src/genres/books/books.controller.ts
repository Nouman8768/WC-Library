import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book, bookdocument } from './booksschema';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private bookservice: BooksService) {}

  @Get()
  async getallbooks() {
    return this.bookservice.getallbooks();
  }
  @Post()
  async addbooks(@Body() book: string) {
    const adddepartment = await this.bookservice.addbooks(book);
    return adddepartment;
  }
  @Put('putupdate/:id')
  async putupdatebook(@Param('id') id: string, @Body() book: bookdocument) {
    console.log(id);
    const updatebooks = await this.bookservice.putupdatebooks(id, book);
    return updatebooks;
  }
  @Patch('patchupdate/:id')
  async patchupdatebook(@Param('id') id: Book, @Body() book: bookdocument) {
    console.log(id);
    return await this.bookservice.patchupdatebooks(id, book);
  }
  @Delete(':id')
  async deletebooks(@Param('id') id: string) {
    console.log(id);
    await this.bookservice.deletebooks(id);
  }
}
