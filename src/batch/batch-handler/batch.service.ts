import { Injectable } from '@nestjs/common';
import { LineService } from '../../line/line.service';
import { LineUserService } from '../../postgres/line-user/line-user.service';
import CustomQuestionMessage from '../../line/messages/CustomQuestionMessage';
import { QuestionsService } from '../../postgres/questions/questions.service';
import { QuestionChoicesService } from '../../postgres/question-choices/question-choices.service';

@Injectable()
export class BatchService {
  constructor(private readonly lineService: LineService,
              private readonly lineUserService: LineUserService,
              private readonly questionsService: QuestionsService,
              private readonly questionChoicesService: QuestionChoicesService) {
  }

  async pushMessage(){

    const question = await this.questionsService.findOneByPrimaryId(1)

    await this.lineService.pushMessage(
      process.env.OWNER_ID,
      CustomQuestionMessage(
        question.title,
        question.image_url,
        question.question_choices.map(q => q.choice_text),
        question.question_choices.map(q => q.next_question_id)
      )
    )
  }
}
