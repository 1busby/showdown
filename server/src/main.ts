import { NestFactory } from '@nestjs/core';
import { NestApplicationOptions } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

import { AppModule } from './app.module';
import { CustomLogger } from './shared';
import { https } from './https.middleware';

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
    logger: false,
  };

  const app = await NestFactory.create(AppModule, options);

  if (process.env.ISPRODUCTION === 'true') {
    options.httpsOptions = {
      key: fs.readFileSync(path.join(__dirname , '..', 'utils', 'keys', 'theshowdown_io.key')),
      cert: fs.readFileSync(path.join(__dirname, '..', 'utils', 'keys', 'theshowdown_io.crt')),
      ca: fs.readFileSync(path.join(__dirname, '..', 'utils', 'keys', 'theshowdown_io.ca-bundle')),
    };

    app.use(https);
  }

  app.useLogger(new CustomLogger());
  app.enableCors(corsOptions);
  await app.listen(process.env.PORT);
}
bootstrap();
