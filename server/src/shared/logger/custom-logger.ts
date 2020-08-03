import { LoggerService, Scope, Injectable } from '@nestjs/common';
import { Logger } from 'tslog';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger extends Logger implements LoggerService {

  log(message: any, context?: string) {
    super.info(message, context);
  }
}
