import { Injectable } from '@nestjs/common';
import { Client } from '@line/bot-sdk';
import * as Types from '@line/bot-sdk/dist/types';
import axiosBase, { AxiosInstance } from 'axios';
import { UserProfileDto } from './userProfile.dto';
import { plainToClass } from 'class-transformer';
import { FlexMessage } from '@line/bot-sdk/dist/types';


@Injectable()
export class LineService {
  private client: Client;
  private axios: AxiosInstance;
  constructor() {
    this.client = new Client({
      channelSecret: process.env.LINE_CHANNEL_SECRET,
      channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    });
    this.axios = axiosBase.create({
      baseURL: "https://api.line.me/v2/bot",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer {${process.env.LINE_CHANNEL_ACCESS_TOKEN}}`
      },
      responseType: 'json'
    })


  }

  async pushMessage(user_id :string, messageTemplate: Types.Message | Types.Message[] | FlexMessage){
    try {
      await this.client.pushMessage(user_id, messageTemplate)
    }catch (e){
      console.log(e)
    }
  }

  async replyMessage(reply_token: string, messageTemplate: Types.Message | Types.Message[] | FlexMessage){
    await this.client.replyMessage(reply_token, messageTemplate)
  }

  async getUserProfileFromLine(userId: string): Promise<UserProfileDto>{
    const user = await this.axios.get(`/profile/${userId}`);
    const userProfile = plainToClass(UserProfileDto, user.data);
    return userProfile
  }
}
