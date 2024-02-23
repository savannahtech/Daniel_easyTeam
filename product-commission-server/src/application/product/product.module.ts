import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import { ProductModel } from '../../domain/model/product.model';

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
