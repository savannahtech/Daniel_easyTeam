import {INestApplication} from "@nestjs/common";
import {DocumentBuilder, OpenAPIObject, SwaggerModule} from "@nestjs/swagger";

export class SwaggerDoc {
  public static apiDocsConfig(app: INestApplication): void {
    const config: Omit<OpenAPIObject, "paths"> = new DocumentBuilder()
      .setTitle('Product Commission APIs Documentation')
      .setVersion('2.0.0')
      .build();
    const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }
}