import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsEntity } from './questions.entity';
import { QuestionChoicesEntity } from '../question-choices/question-choices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionsEntity])],
  providers: [QuestionsService],
  exports: [QuestionsService,TypeOrmModule]
})
export class QuestionsModule {}
