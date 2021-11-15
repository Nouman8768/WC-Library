import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoanedbooksModule } from './loanedbooks/loanedbooks.module';
import { LoanedBook, loanedbookschema } from './loanedbooks/loanedbook_schema';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { Members, membersschema } from './member_schema';


@Module({
  imports:[LoanedbooksModule,MongooseModule.forFeature([{
    name:Members.name,
    schema:membersschema
  }]),
  MongooseModule.forFeature([{
    name:LoanedBook.name,
    schema:loanedbookschema
  }])],
  controllers: [MembersController],
  providers: [MembersService]
})
export class MembersModule {}
