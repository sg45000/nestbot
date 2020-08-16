import { Test, TestingModule } from '@nestjs/testing';
import { QuestionChoicesService } from './question-choices.service';

describe('QuestionChoicesService', () => {
  let service: QuestionChoicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionChoicesService],
    }).compile();

    service = module.get<QuestionChoicesService>(QuestionChoicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
