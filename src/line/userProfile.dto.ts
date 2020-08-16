import { IsString } from 'class-validator';

export class UserProfileDto {
  @IsString()
  userId: string;

  @IsString()
  displayName: string;

  @IsString()
  pictureUrl: string;

  @IsString()
  statusMessage: string;
}
