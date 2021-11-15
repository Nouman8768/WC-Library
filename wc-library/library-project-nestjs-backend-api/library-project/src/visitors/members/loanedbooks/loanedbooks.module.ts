import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersModule } from '../members.module';
import { LoanedbooksController } from './loanedbooks.controller';
import { LoanedbooksService } from './loanedbooks.service';
import { LoanedBook, loanedbookschema } from './loanedbook_schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:LoanedBook.name,
    schema:loanedbookschema
  }]),
],
  controllers: [LoanedbooksController],
  providers: [LoanedbooksService]
})
export class LoanedbooksModule {}
