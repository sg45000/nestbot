import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm/index';
import { QuestionsEntity } from '../questions/questions.entity';
import { REPOSITORY } from '../../constants';

@Entity(REPOSITORY.QUESTION_CHOICES)
export class QuestionChoicesEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  choice_text: string

  @Column()
  question_id: number

  @ManyToOne(type => QuestionsEntity, questions => questions.id)
  @JoinColumn({ name: 'question_id', referencedColumnName: 'id' })
  readonly question?: QuestionsEntity;

  @Column({nullable: true})
  next_question_id: number

  @ManyToOne(type => QuestionsEntity, questions => questions.id)
  @JoinColumn({ name: 'next_question_id', referencedColumnName: 'id' })
  readonly next_question?: QuestionsEntity;
}
