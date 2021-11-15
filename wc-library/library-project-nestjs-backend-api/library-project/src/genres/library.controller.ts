import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { departmentdocument } from './departments-schema';
import { LibraryService } from './library.service';

@ApiTags('Genre')
@Controller('Genres')
export class LibraryController {
  constructor(private lib_service: LibraryService) {}

  @Get()
  async getalldepartments() {
    return this.lib_service.getalldepartments();
  }
  @Get('getsinglegenre/:genreid')
  async getdepartmentbyid(@Param('genreid') genreid: string) {
    return this.lib_service.getdepartmentbyid(genreid);
  }
  @Get('booksofperticulargenre/:genrename')
  async getallBooksofSingleGenere(@Param('genrename') genrename: string) {
    return this.lib_service.getallBooksofSingleGenere(genrename);
    //     var check = await this.lib_service.getdepartmentbyid(id);
    //     if (check != null) { return this.lib_service.getallBooksofSingleGenere(id) }
    //     else {

    //         throw new HttpException('ID does not match to any Genres,Please Enter a valid Genre ID', 404)
    //     }
  }
  @Post()
  async adddepartments(@Body() department: string) {
    const adddepartment = await this.lib_service.adddepartment(department);
    return adddepartment;
  }
  @Put('putupdate/:id')
  async putupdatedepartment(
    @Param('id') id: string,
    @Body() department: departmentdocument,
  ) {
    const updatedepartments = await this.lib_service.putupdatedepartment(
      id,
      department,
    );
    return updatedepartments;
  }
  @Patch(':id')
  async patchupdatedepartment(
    @Param('id') id: string,
    @Body() department: departmentdocument,
  ) {
    return await this.lib_service.patchupdatedepartment(id, department);
  }
  @Delete(':id')
  async deletedepartment(@Param('id') id: string) {
    await this.lib_service.deletedepartment(id);
  }
}
