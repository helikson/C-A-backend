import {
   Table,
   PrimaryKey,
   Model,
   Column,
   ForeignKey,
   BelongsTo,
   HasMany,
   AllowNull,
   DataType,
} from "sequelize-typescript";
import CustomerModel from "../../../customer/repository/sequelize/customer.model";
import OrderItemModel from "./order-item.model";

@Table
export default class Order extends Model {
   @PrimaryKey
   @Column(DataType.STRING)
   declare id: string;

   @ForeignKey(() => CustomerModel)
   @AllowNull(false)
   @Column(DataType.STRING)
   declare customer_id: string;

   @BelongsTo(() => CustomerModel)
   declare customer: CustomerModel;

   @HasMany(() => OrderItemModel)
   declare items: OrderItemModel[];

   @AllowNull(false)
   @Column(DataType.NUMBER)
   declare total: number;
}
