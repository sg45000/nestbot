import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { REPOSITORY } from '../../constants';

@Entity(REPOSITORY.LINE_USER)
export class LineUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  line_user_id: string;

  @Column({ default: false })
  host?: boolean;

  @Column()
  active: boolean;
}
