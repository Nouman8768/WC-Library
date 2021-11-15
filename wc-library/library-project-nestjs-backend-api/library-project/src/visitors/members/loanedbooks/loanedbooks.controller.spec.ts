import { Test, TestingModule } from '@nestjs/testing';
import { LoanedbooksController } from './loanedbooks.controller';

describe('LoanedbooksController', () => {
  let controller: LoanedbooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanedbooksController],
    }).compile();

    controller = module.get<LoanedbooksController>(LoanedbooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
