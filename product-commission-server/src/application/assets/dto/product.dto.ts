import {ApiProperty} from "@nestjs/swagger";
import {IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID} from "class-validator";
import {ProductModel} from "../../../domain/model/product.model";

export class ProductDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @ApiProperty()
  @IsNotEmpty()
  product_type: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  product_price: number;

  @ApiProperty()
  @IsNumber()
  product_percent: number

  private static entity(payload: Partial<ProductDto>): ProductDto {
    const dto: ProductDto = new ProductDto();
    dto.product_name = payload.product_name;
    dto.product_type = payload.product_type;
    dto.product_price = payload.product_price;
    dto.product_percent = payload.product_percent
    return dto;
  }

  public static composeFromEntity(payload: ProductDto, entity?: ProductModel): ProductDto {
    return this.entity({
      product_name: payload.product_name || entity.product_name,
      product_type: payload.product_type || entity.product_type,
      product_price: payload.product_price || entity.product_price,
      product_percent: payload.product_percent || entity.product_percent
    });
  }
}