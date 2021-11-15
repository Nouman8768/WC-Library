import { Test, TestingModule } from '@nestjs/testing';
import { LoanedbooksService } from './loanedbooks.service';

describe('LoanedbooksService', () => {
  let service: LoanedbooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanedbooksService],
    }).compile();

    service = module.get<LoanedbooksService>(LoanedbooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
