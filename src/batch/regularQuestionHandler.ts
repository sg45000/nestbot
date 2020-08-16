import { NestFactory } from '@nestjs/core';
import { BatchModule } from './batch-handler/batch.module';
import { BatchService } from './batch-handler/batch.service';
import { program } from 'commander'

(async function regularQuestionHandler() {
  const app = await NestFactory.create(BatchModule)
  const service = await app.resolve(BatchService)
  const args = program.parse(process.argv).args
  if( args.length > 0 ){
    switch (args[0]) {
      case "-reg":
        await service.pushMessage()
        break
      default:
        await service.pushMessage()
        break
    }
  }

  return;
})()
