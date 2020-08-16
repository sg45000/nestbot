import { IsArray, IsInt, IsObject, IsOptional, IsString } from 'class-validator';
import { Expose, Type } from 'class-transformer';

export class Source {
  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsString()
  userId: string;
}

export class Message {
  @Expose()
  @IsString()
  id: string

  @Expose()
  @IsString()
  type: string

  @Expose()
  @IsString()
  text: string
}

export class PostBack {
  @Expose()
  @IsString()
  data: string

  @Expose()
  @IsObject()
  params: {}
}
export class Events {
  @Expose()
  @IsString()
  replyToken: string;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsString()
  mode: string;

  @Expose()
  @IsInt()
  timestamp: number;

  @Expose()
  @Type(() => Source)
  source: Source;

  @Expose()
  @Type(() => Message)
  message: Message;

  @Expose()
  @Type(() => PostBack)
  postback: PostBack;
}

export class WebhookEventsDto {
  @Expose()
  @IsString()
  destination: string;

  @Expose()
  @IsArray()
  @Type(() => Events)
  events: Events[];
}

export class PostBackData {
  @IsString()
  answer: string

  @IsInt()
  @IsOptional()
  next_id?: number | null
}

