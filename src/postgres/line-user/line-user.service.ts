import { Inject, Injectable } from '@nestjs/common';
import { LineUserEntity } from './line-user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfileDto } from '../../line/userProfile.dto';
import { Connection } from 'typeorm';

@Injectable()
export class LineUserService {
  constructor(@InjectRepository(LineUserEntity)
              private lineUserRepository: Repository<LineUserEntity>, private connection: Connection) {
  }

  async findAll(): Promise<LineUserEntity[]> {
    return await this.lineUserRepository.find();
  }

  async upsert(userProfile: UserProfileDto): Promise<void> {
    try {
      const columns = await this.userProfileToDbFormat(userProfile)
      await this.connection.createQueryBuilder()
        .insert()
        .into(LineUserEntity)
        .values(columns)
        .onConflict(`("line_user_id") DO UPDATE SET "active" = :active`)
        .setParameter("active", true)
        .execute();
    }catch (e) {
      console.log(e)
    }
  }

  async userProfileToDbFormat(userProfile: UserProfileDto): Promise<any> {
    return {
      name: userProfile.displayName,
      line_user_id: userProfile.userId
    }
  }
}
