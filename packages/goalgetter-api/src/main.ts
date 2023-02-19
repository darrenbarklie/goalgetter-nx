import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  console.log('::: GoalGetter API: v0.0.1 :::');

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(', '),
    credentials: true,
  });

  const globalPrefix = process.env.PREFIX || '';
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `goalgetter-api is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
