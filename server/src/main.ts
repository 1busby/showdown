import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const whitelist = [
  'http://localhost:4200',
]
const corsOptions = {
  origin(origin, callback) {
    console.log('CORS callback - Origin: ' + origin);

    return callback(null, true);
    if (!origin) {
      return callback(null, true);
    }

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'));
    }
  },
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(process.env.PORT);
}
bootstrap();
