import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {typeormConfigManager} from "./application/config/database/typeorm.config";
import {ProductsModule} from "./application/product/product.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeormConfigManager.getTypeOrmConfig()
    }),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
