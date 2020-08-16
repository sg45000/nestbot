import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RandomMessageEntity } from './random-message.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class RandomMessageService {
  constructor(@InjectRepository(RandomMessageEntity)
              private randomMessageRepository: Repository<RandomMessageEntity>, private connection: Connection) {
  }

  async findAll(): Promise<RandomMessageEntity[]> {
    return await this.randomMessageRepository.find()
  }
}
