import { Test, TestingModule } from '@nestjs/testing';
import { DebtsService } from './debts.service';

describe('DebtsService', () => {
  let service: DebtsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebtsService],
    }).compile();

    service = module.get<DebtsService>(DebtsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
