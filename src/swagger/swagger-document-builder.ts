import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerUI } from './swagger-ui.class';
import { swaggerTags } from './swagger-tags/swagger-tags.constant';

export class SwaggerDocumentBuilder {
  constructor(
    private readonly app: INestApplication<any>,
    private readonly applicationUrl: string,
    private readonly swaggerUrl: string,
  ) {}

  private buildConfig() {
    const docBuilder = new DocumentBuilder()
      .setTitle('Custom Swagger UI API')
      .setDescription('This is the Custom Swagger UI API application.')
      .setVersion('1.0')
      .addBasicAuth()
      .addBearerAuth(
        {
          bearerFormat: 'Bearer',
          scheme: 'Bearer',
          type: 'http',
          in: 'Header',
        },
        'JWTAuthorization',
      );

    swaggerTags.forEach((tag) => {
      docBuilder.addTag(tag.name, tag.description);
    });

    return docBuilder.build();
  }

  private createDocument() {
    const config = this.buildConfig();
    return SwaggerModule.createDocument(this.app, config);
  }

  public setupSwagger() {
    const document = this.createDocument();
    const swaggerUI = new SwaggerUI(this.applicationUrl);
    console.log('swaggerUI.customOptions', swaggerUI.customOptions);
    SwaggerModule.setup(
      this.swaggerUrl,
      this.app,
      document,
      swaggerUI.customOptions,
    );
  }
}
