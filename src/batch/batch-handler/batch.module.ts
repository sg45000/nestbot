import { Module } from '@nestjs/common';
import { BatchService } from './batch.service';
import { ConfigModule } from '@nestjs/config';
import { LineUserModule } from '../../postgres/line-user/line-user.module';
import { LineModule } from '../../line/line.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineUserEntity } from '../../postgres/line-user/line-user.entity';
import { QuestionChoicesModule } from '../../postgres/question-choices/question-choices.module';
import { QuestionsModule } from '../../postgres/questions/questions.module';
import { QuestionsEntity } from '../../postgres/questions/questions.entity';
import { QuestionChoicesEntity } from '../../postgres/question-choices/question-choices.entity';
import {path} from 'app-root-path';
console.log(path)
@Module({
  imports: [
    ConfigModule.forRoot( {
      envFilePath: path + '/.env',
      ignoreEnvFile: process.env.TARGET_ENV != 'development'
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [LineUserEntity,QuestionsEntity,QuestionChoicesEntity],
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    }),
    LineModule,
    LineUserModule,
    QuestionChoicesModule,
    QuestionsModule],
  providers: [BatchService]
})
export class BatchModule {}
