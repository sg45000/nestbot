import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsEntity } from './questions.entity';
import { Repository } from 'typeorm/index';
import { REPOSITORY } from '../../constants';

@Injectable()
export class QuestionsService {
  constructor(@InjectRepository(QuestionsEntity) private questionsRepository: Repository<QuestionsEntity>) {
  }

  async findAll(){
    return await this.questionsRepository.find()
  }

  async findOneByPrimaryId(id: number){
    return await this.questionsRepository.findOne(
      id,
      {relations: [REPOSITORY.QUESTION_CHOICES]}
      )
  }
}
