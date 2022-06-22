import { NestFactory } from '@nestjs/core';
import { FallBackExceptionFilter, HttpExceptionFilter } from './http/http.filters';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new FallBackExceptionFilter(), new HttpExceptionFilter());
  await app.listen(9000);
}
bootstrap();
