import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerDocumentBuilder } from './swagger/swagger-document-builder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const applicationUrl = 'http://localhost:3000/api';
  const swaggerUrl = 'api/sw';
  const swaggerDocumentBuilder = new SwaggerDocumentBuilder(
    app,
    applicationUrl,
    swaggerUrl,
  );
  swaggerDocumentBuilder.setupSwagger();

  await app.listen(3000);
}
bootstrap();
