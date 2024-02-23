import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductDto } from '../assets/dto/product.dto';
import {IApiResponse} from "../../shared/responses/api-response.interface";
import {ApiResponse} from "../../shared/responses/api.response";
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Products")
@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Post("/")
  async create(@Body() createProductDto: ProductDto): Promise<IApiResponse<ApiResponse>> {
    return this.service.create(createProductDto);
  }

  @Get("/")
  async findAll(): Promise<IApiResponse<ApiResponse>> {
    return this.service.findAll();
  }


  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateProductDto: ProductDto): Promise<IApiResponse<ApiResponse>> {
    return this.service.update(id, updateProductDto);
  }
}
