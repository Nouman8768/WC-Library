import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VisitorsController } from './visitors.controller';
import { VisitorsService } from './visitors.service';
import { Visitors, visitorschema, } from './visitors_schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:Visitors.name,
    schema:visitorschema
  }])],
  controllers: [VisitorsController],
  providers: [VisitorsService]
})
export class VistorsModule {}
