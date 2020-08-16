import { Entity, Column } from 'typeorm';
import { REPOSITORY } from '../../constants';
import { PrimaryGeneratedColumn } from 'typeorm/index';

@Entity(REPOSITORY.RANDOM_MESSAGES)
export class RandomMessageEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  message: string
}
