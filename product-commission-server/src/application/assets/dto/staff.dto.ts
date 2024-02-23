import {ApiProperty} from "@nestjs/swagger";
import {IsString, IsNotEmpty, IsOptional, IsUUID} from "class-validator";
import {StaffModel} from "../../../domain/model/staff.model";

export class StaffDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  staff_id: string;

  private static entity(payload: Partial<StaffDto>): StaffDto {
    const dto: StaffDto = new StaffDto();
    dto.id = payload?.id;
    dto.username = payload.username;
    dto.staff_id = payload.staff_id;
    return dto;
  }

  public static composeFromEntity(payload: StaffDto, entity?: StaffModel): StaffDto {
    return this.entity({
      id: payload?.id || entity?.id,
      username: payload?.username || entity?.username,
      staff_id: payload?.staff_id || entity?.staff_id
    });
  }

  public static composeToEntity(payload: StaffDto, entity?: StaffModel): StaffDto {
    return this.entity({
      ...this.composeFromEntity(payload, entity),
    });
  }
}