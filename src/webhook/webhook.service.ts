import { Injectable } from '@nestjs/common';
import { LineService } from '../line/line.service';
import { PostBackData, WebhookEventsDto } from './webhookEvents.dto';
import textMessage from '../line/messages/TextMessage';
import customMessage from '../line/messages/CustomQuestionMessage'
import { LineUserService } from '../postgres/line-user/line-user.service';
import { RandomMessageService } from '../postgres/random-message/random-message.service';
import TextMessage from '../line/messages/TextMessage';
import { QuestionsService } from '../postgres/questions/questions.service';
import { plainToClass } from 'class-transformer';

@Injectable()
export class WebhookService {
  constructor(private readonly lineService: LineService,
              private readonly lineUserService: LineUserService,
              private readonly randomMessageService: RandomMessageService,
              private readonly questionsService: QuestionsService) {
  }

  async postback(webhookEvents: WebhookEventsDto){
    const params = plainToClass(PostBackData, JSON.parse(webhookEvents.events[0].postback.data))

    await this.lineService.pushMessage(process.env.OWNER_ID, TextMessage(params.answer))

    if(params.next_id) {
      const question = await this.questionsService.findOneByPrimaryId(params.next_id)
      await this.lineService.replyMessage(
        webhookEvents.events[0].replyToken,
        customMessage(
          question.title,
          question.image_url,
          question.question_choices.map(q => q.choice_text),
          question.question_choices.map(q => q.next_question_id)
        ))
    } else {
      await this.lineService.replyMessage(webhookEvents.events[0].replyToken, textMessage("ありがとなすー^^"))
    }
  }
  async message(webhookEvents: WebhookEventsDto){
    const randomMessages = await this.randomMessageService.findAll()
    if (randomMessages.length > 0) {
      const index = Math.floor(Math.random() * (randomMessages.length))
      await this.lineService.replyMessage(webhookEvents.events[0].replyToken, textMessage(randomMessages[index].message))
    }

  }
  async follow(webhookEvents: WebhookEventsDto){
    const userProfile = await this.lineService.getUserProfileFromLine(webhookEvents.events[0].source.userId)
    await this.lineUserService.upsert(userProfile)
    await this.lineService.replyMessage(webhookEvents.events[0].replyToken, textMessage(`フォローありがとう！これから${userProfile.displayName}さんの生活をサポートするよ！`))
  }
}
