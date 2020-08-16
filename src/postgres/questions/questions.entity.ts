import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm/index';
import { REPOSITORY } from '../../constants';
import { QuestionChoicesEntity } from '../question-choices/question-choices.entity';

@Entity(REPOSITORY.QUESTIONS)
export class QuestionsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  image_url: string

  @OneToMany(type => QuestionChoicesEntity, questionChoices => questionChoices.question)
  question_choices?: QuestionChoicesEntity[]

  @OneToMany(type => QuestionChoicesEntity, questionChoices => questionChoices.next_question)
  next_question_choices?: QuestionChoicesEntity[]
}
