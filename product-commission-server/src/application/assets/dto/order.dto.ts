import {ApiProperty} from "@nestjs/swagger";
import {IsString, IsUUID} from "class-validator";
import {OrderModel} from "../../../domain/model/order.model";

export class OrderDto {
  @IsUUID()
  id: string;

  @IsString()
  total: string;

  commission: string;

  private static entity(payload: Partial<OrderDto>): OrderDto {
    const dto: OrderDto = new OrderDto();
    dto.id = payload?.id;
    dto.commission = payload?.commission;
    dto.total = payload.total;
    return dto;
  }

  public static composeFromEntity(payload: any, entity?: OrderModel): OrderDto {
    return this.entity({
      id: payload?.id || entity?.id,
      commission: payload?.commission || entity?.commission,
      total: payload?.total || entity?.total
    });
  }

  public static composeToEntity(payload: any, entity?: OrderModel): OrderDto {
    return this.entity({
      ...this.composeFromEntity(payload, entity)
    });
  }
}