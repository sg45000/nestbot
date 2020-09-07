import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookService } from './webhook/webhook.service';
import { WebhookController } from './webhook/webhook.controller';
import { WebhookModule } from './webhook/webhook.module';
import { LineService } from './line/line.service';
import { LineModule } from './line/line.module';
import { LineUserModule } from './postgres/line-user/line-user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineUserEntity } from './postgres/line-user/line-user.entity';
import { RandomMessageModule } from './postgres/random-message/random-message.module';
import { RandomMessageEntity } from './postgres/random-message/random-message.entity';
import { QuestionsService } from './postgres/questions/questions.service';
import { QuestionsModule } from './postgres/questions/questions.module';
import { QuestionChoicesModule } from './postgres/question-choices/question-choices.module';
import { QuestionsEntity } from './postgres/questions/questions.entity';
import { QuestionChoicesEntity } from './postgres/question-choices/question-choices.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ignoreEnvFile: process.env.TARGET_ENV == 'production'}),
    WebhookModule,
    LineModule,
    LineUserModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [LineUserEntity,RandomMessageEntity,QuestionsEntity,QuestionChoicesEntity],
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    }),
    RandomMessageModule,
    QuestionsModule,
    QuestionChoicesModule],
  controllers: [AppController, WebhookController],
  providers: [AppService, WebhookService, LineService, QuestionsService],
})
export class AppModule {}
