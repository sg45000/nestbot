import { Module } from '@nestjs/common';
import { RandomMessageService } from './random-message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RandomMessageEntity } from './random-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RandomMessageEntity])],
  providers: [RandomMessageService],
  exports: [RandomMessageService,TypeOrmModule]
})
export class RandomMessageModule {}
