import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MembersService } from './members.service';
import { membersdocument } from './member_schema';
@ApiTags("Members")
@Controller('members')
export class MembersController {
    constructor(private memb_service: MembersService) { }

    @Get()
    async getallmembers() {
        return this.memb_service.getallmembers()
    }
    @Get('getsinglemember/:memberid')
    async getmembersbyid(@Param('memberid') memberid: string) {
        return this.memb_service.getmembersbyid(memberid)
    }
    @Get('booksloanedbySingleMember/:membername')
    async getBooksloanedbySingleMember(@Param('membername') membername: string) {
        return this.memb_service.getBooksloanedbySingleMember(membername)
    //     var check = await this.lib_service.getdepartmentbyid(id);
    //     if (check != null) { return this.lib_service.getallBooksofSingleGenere(id) }
    //     else {

    //         throw new HttpException('ID does not match to any Genres,Please Enter a valid Genre ID', 404)
    //     }

     }
    @Post()
    async addmembers(
        @Body() member: string,) {
        const addmember = await this.memb_service.addmembers(member)
        return addmember
    }
    @Put(':id')
    async putupdatemembers(@Param('id') id: string, @Body() member: membersdocument) {
        const updatemember = await this.memb_service.putupdatemembers(id, member)
        return updatemember
    }
    @Patch(':id')
    async patchupdatemembers(@Param('id') id: string, @Body() member: membersdocument) {
        return await this.memb_service.patchupdatemembers(id, member)

    }
    @Delete(':id')
    async deletemembers(@Param('id') id: string) {
        await this.memb_service.deletemembers(id);
    }
}
