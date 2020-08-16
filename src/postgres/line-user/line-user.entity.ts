import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { REPOSITORY } from '../../constants';

@Entity(REPOSITORY.LINE_USER)
export class LineUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  line_user_id: string;

  @Column()
  host: boolean;
}
