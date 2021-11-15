import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VisitorsService } from './visitors.service';
import { visitorsdocument } from './visitors_schema';
@ApiTags('Visitors')
@Controller('visitors')
export class VisitorsController {
    constructor(private vis_service: VisitorsService) { }
  
    @Get()
    async getallvisitors() {
        return this.vis_service.getallvisitors()
    }
    @Get('getsinglevisitor/:visitorid')
    async getvisitorbyid(@Param('genreid') visitorid: string) {
        return this.vis_service.getvisitorbyid(visitorid)
    }
    @Post()
    async addvisitor(
        @Body() visitor: string,) {
        const addvisitor = await this.vis_service.addvisitor(visitor)
        return addvisitor
    }
    @Put(':id')
    async putupdatevisitor(@Param('id') id: string, @Body() visitor: visitorsdocument) {
        const updatevisitor = await this.vis_service.putupdatevisitor(id, visitor)
        return updatevisitor
    }
    @Patch(':id')
    async patchupdatevisitor(@Param('id') id: string, @Body() visitor: visitorsdocument) {
        return await this.vis_service.patchupdatevisitor(id, visitor)

    }
    @Delete(':id')
    async deletevisitor(@Param('id') id: string) {
        await this.vis_service.deletevisitor(id);
    }



}
