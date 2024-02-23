import {NestFactory} from '@nestjs/core';
import {INestApplication} from "@nestjs/common";
import {AppModule} from './app.module';
import {SwaggerDoc} from "./application/config/docs/swagger.doc";
import {AppConfig} from "./application/config/app/app.config";

class MainApplication {
  private static async main(): Promise<void> {
    const app: INestApplication = await NestFactory.create(AppModule);

    AppConfig.appConfig(app);

    AppConfig.getGlobalValidationConfig(app);

    SwaggerDoc.apiDocsConfig(app);

    await app.listen(AppConfig.getAppPort());
  }

  public static async run(): Promise<void> {
    await this.main()
  }
}

MainApplication.run().catch(error => console.log(error.message));