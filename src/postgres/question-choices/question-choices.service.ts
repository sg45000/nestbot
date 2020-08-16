import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsEntity } from '../questions/questions.entity';
import { Repository } from 'typeorm/index';
import { QuestionChoicesEntity } from './question-choices.entity';

@Injectable()
export class QuestionChoicesService {
  constructor(@InjectRepository(QuestionChoicesEntity) private questionChoicesRepository: Repository<QuestionChoicesEntity>) {
  }


  async findAll(){
      return await this.questionChoicesRepository.find()
  }


}
