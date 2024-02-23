import {INestApplication, ValidationPipe} from "@nestjs/common";
import {GlobalExceptionFilter} from "../../../exception/global.exception";
import {envManager} from "../env/env.manager";

export class AppConfig {
  public static appConfig(app: INestApplication): void {
    app.setGlobalPrefix("/api");
    app.enableCors();
    app.useGlobalFilters(new GlobalExceptionFilter());
  }

  public static getAppPort(): number {
    return envManager.getEnvValue("APP_PORT") as unknown as number;
  }

  public static getGlobalValidationConfig(app: INestApplication): void {
    app.useGlobalPipes(new ValidationPipe());
  }
}