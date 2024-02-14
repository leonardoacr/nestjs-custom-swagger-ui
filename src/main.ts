import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerDocumentBuilder } from './swagger/swagger-document-builder';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();

  const swaggerDocumentBuilder = new SwaggerDocumentBuilder(app);
  swaggerDocumentBuilder.setupSwagger();

  await app.listen(3000);
}
bootstrap();
