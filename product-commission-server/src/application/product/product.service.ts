import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ProductModel} from "../../domain/model/product.model";
import { ProductDto } from '../assets/dto/product.dto';
import {ApiResponse, ApiResponseBuilder} from "../../shared/responses/api.response";
import {IApiResponse} from "../../shared/responses/api-response.interface";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductModel)
    private readonly repository: Repository<ProductModel>,
  ) {}

  async create(payload: ProductDto): Promise<IApiResponse<ApiResponse>> {
    try {
      const buildProduct: ProductDto = Object.assign(new ProductDto(), ProductDto.composeFromEntity(payload));

      const product: ProductModel = await this.repository.save(buildProduct);

      return ApiResponseBuilder.default().setData(product).build();
    } catch (error) {
      return ApiResponseBuilder.exception(error.message).build();
    }
  }

  async findAll(): Promise<IApiResponse<ApiResponse>> {
    try {
      const products: ProductModel[] = await this.repository.find();
      return ApiResponseBuilder.default().setData(products).build();
    } catch (error) {
      return ApiResponseBuilder.exception(error.message).build();
    }
  }

  async update(id: string, payload: ProductDto): Promise<IApiResponse<ApiResponse>> {
    try {
      const product: ProductModel = await this.repository.findOne({ where: { id }});
      this.repository.merge(product, payload);
      const updated =  await this.repository.save(product);
      return ApiResponseBuilder.default().setData(updated).build();
    } catch (error) {
      return ApiResponseBuilder.exception(error.message).build();
    }
  }
}
