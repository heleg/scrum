/* eslint-disable no-console */

import 'source-map-support/register';

import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = 3334;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      transform: true,
    }),
  );

  app.use(passport.initialize());

  await app.listen(PORT);
}

bootstrap()
  .then(() => {
    console.log(`Server listen at http://localhost:${PORT}`);
  })
  .catch((e) => {
    console.log('--- --- --- --- error --- :\n', e);
  });
