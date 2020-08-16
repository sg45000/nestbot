import { Body, Controller, Get, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookEventsDto } from './webhookEvents.dto';
import { WebhookEventType } from '../constants'

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {
  }

  @Post()
  async webhook(@Body(ValidationPipe) webhookEvents: WebhookEventsDto) {
    switch (webhookEvents.events[0].type) {
      case WebhookEventType.POSTBACK:
        await this.webhookService.postback(webhookEvents)
        break;
      case WebhookEventType.FOLLOW:
        await this.webhookService.follow(webhookEvents)
        break;
      case WebhookEventType.MESSAGE:
        await this.webhookService.message(webhookEvents)
        break;
      default:
        break;
    }
  }

}
