import { NestFactory } from '@nestjs/core';
import { NestApplicationOptions } from '@nestjs/common';
import * as fs from 'fs';

import { AppModule } from './app.module';
import { CustomLogger } from './shared';

const whitelist = ['http://localhost:4200'];
const corsOptions = {
  origin(origin, callback) {
    return callback(null, true);
    if (!origin) {
      return callback(null, true);
    }

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error(
          'The CORS policy for this site does not allow access from the specified Origin.',
        ),
      );
    }
  },
};

async function bootstrap() {
  const options: NestApplicationOptions = {
    logger: new CustomLogger(),
  };

  if (process.env.ISPRODUCTION === 'true') {
    options.httpsOptions = {
      key: fs.readFileSync('./config/gamebrackets_app.key'),
      cert: fs.readFileSync('./config/gamebrackets_app.crt'),
      ca: fs.readFileSync('./config/gamebrackets_app.ca-bundle'),
    };
  }

  const app = await NestFactory.create(AppModule, options);

  app.enableCors(corsOptions);
  await app.listen(process.env.PORT);
}
bootstrap();
