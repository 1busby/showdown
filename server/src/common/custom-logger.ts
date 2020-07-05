import { LoggerService } from '@nestjs/common';
import { Logger } from 'tslog';

export class CustomLogger extends Logger implements LoggerService {
  log(message: any, context?: string) {
    super.info(message, context);
  }
}
