import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductModel } from './product.model';
import {BaseModel} from "./base.model";

@Entity()
export class OrderModel extends BaseModel {
  @ManyToOne(() => ProductModel, { eager: true }) // Many orders can belong to one product
  @JoinColumn({})
  product: ProductModel;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column('decimal')
  commission: number
}
