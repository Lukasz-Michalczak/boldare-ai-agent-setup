import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from './knowledge/cors.config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  app.enableCors(cors);

  const port = process.env['PORT'] || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}
bootstrap();