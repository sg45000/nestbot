import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { LineModule } from '../line/line.module';
import { LineUserModule } from '../postgres/line-user/line-user.module';
import { RandomMessageModule } from '../postgres/random-message/random-message.module';
import { QuestionsModule } from '../postgres/questions/questions.module';

@Module({
  imports: [LineModule, LineUserModule, RandomMessageModule, QuestionsModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
