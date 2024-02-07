export class SwaggerUI {
  constructor(private readonly applicationUrl: string) {}

  private customfavIcon: string = `${this.applicationUrl}/wwwroot/swagger/assets/nestjs-logo.png`;
  private customSiteTitle: string = 'Custom Swagger UI';
  private customCss: string = `
      .topbar-wrapper { content:url('${this.applicationUrl}/wwwroot/swagger/assets/app-logo.png'); width:242px; height:auto; }
      .topbar-wrapper svg { visibility: hidden; }
      .swagger-ui .topbar { background-color: #222222; }
      .swagger-ui .opblock.opblock-get { background-color: #E4E4E4; border-color: #DADFE1; }
      .swagger-ui .opblock.opblock-get .opblock-summary-method { background: #222222; }
      .swagger-ui .opblock.opblock-post { background-color: #E4E4E4; border-color: #DADFE1; }
      .swagger-ui .opblock.opblock-post .opblock-summary-method { background: #222222; }
      .swagger-ui .opblock.opblock-delete { background-color: #E4E4E4; border-color: #DADFE1; }
      .swagger-ui .opblock.opblock-delete .opblock-summary-method { background: #222222; }
      .swagger-ui .opblock.opblock-patch { background-color: #E4E4E4; border-color: #DADFE1; }
      .swagger-ui .opblock.opblock-patch .opblock-summary-method { background: #222222; }
      .swagger-ui .opblock.opblock-put { background-color: #E4E4E4; border-color: #DADFE1; }
      .swagger-ui .opblock.opblock-put .opblock-summary-method { background: #222222; }
      .swagger-ui .btn.authorize { border-color: #222222; color: #222222; }
      .swagger-ui .btn.authorize svg { fill: #222222; } `;
  private swaggerOptions = {
    persistAuthorization: true,
  };

  public customOptions = {
    customfavIcon: this.customfavIcon,
    customSiteTitle: this.customSiteTitle,
    customCss: this.customCss,
    swaggerOptions: this.swaggerOptions,
  };
}
