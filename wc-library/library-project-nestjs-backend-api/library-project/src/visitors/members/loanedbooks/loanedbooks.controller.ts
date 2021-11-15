import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoanedbooksService } from './loanedbooks.service';
import { loanedbookdocument } from './loanedbook_schema';
@ApiTags('LoanedBooks')
@Controller('loanedbooks')
export class LoanedbooksController {
    constructor(private lonedbook_service: LoanedbooksService) { }

    @Get()
    async getall_Loaned_books() {
        return this.lonedbook_service.getall_Loaned_books()
    }
    @Post()
    async add_Loaned_books(
        @Body() book: string,) {
        const add_Loaned_books = await this.lonedbook_service.add_Loaned_books(book)
        return add_Loaned_books
    }
    @Put(':id')
    async putupdate_Loaned_book(@Param('id') id: string, @Body() book: loanedbookdocument) {
        const update_Loaned_books = await this.lonedbook_service.putupdate_Loaned_book(id, book)
        return update_Loaned_books
    }
    @Patch(':id')
    async patchupdate_Loaned_book(@Param('id') id: string, @Body() book: loanedbookdocument) {
        return await this.lonedbook_service.patchupdate_Loaned_book(id, book)

    }
    @Delete(':id')
    async delete_Loaned_books(@Param('id') id: string) {
        await this.lonedbook_service.delete_Loaned_books(id);
    }
}
