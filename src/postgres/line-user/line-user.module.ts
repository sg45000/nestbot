import { Module } from '@nestjs/common';
import { LineUserService } from './line-user.service';
import { LineUserEntity } from './line-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LineUserEntity])],
  providers: [LineUserService],
  exports: [LineUserService,TypeOrmModule]
})
export class LineUserModule {}
