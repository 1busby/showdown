import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

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
  let httpsOptions;

  if (process.env.ISPRODUCTION === 'true') {
    httpsOptions = {
      key: fs.readFileSync('./config/gamebrackets_app.key'),
      cert: fs.readFileSync('./config/gamebrackets_app.crt'),
      ca: fs.readFileSync('./config/gamebrackets_app.ca-bundle'),
    };
  } else {
    httpsOptions = {};
  }

  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.enableCors(corsOptions);
  await app.listen(process.env.PORT);
}
bootstrap();
