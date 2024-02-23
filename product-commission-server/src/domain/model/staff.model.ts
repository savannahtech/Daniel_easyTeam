import {Entity, Column} from 'typeorm';
import {BaseModel} from "./base.model";

@Entity('staff_tbl')
export class StaffModel extends BaseModel {
  @Column({ type: "varchar", nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  staff_id: string;
}