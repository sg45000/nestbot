import { Module } from '@nestjs/common';
import { QuestionChoicesService } from './question-choices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionChoicesEntity } from './question-choices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionChoicesEntity])],
  providers: [QuestionChoicesService],
  exports: [QuestionChoicesService, TypeOrmModule]
})
export class QuestionChoicesModule {}
