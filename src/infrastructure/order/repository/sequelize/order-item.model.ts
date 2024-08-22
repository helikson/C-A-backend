import {
   Table,
   PrimaryKey,
   Model,
   Column,
   ForeignKey,
   BelongsTo,
   DataType,
   AllowNull,
} from "sequelize-typescript";
import ProductModel from "../../../product/repository/sequelize/product.model";
import OrderModel from "./order.model";

@Table
export default class OrderItem extends Model {
   @PrimaryKey
   @Column(DataType.STRING)
   declare id: string;

   @ForeignKey(() => ProductModel)
   @AllowNull(false)
   @Column(DataType.STRING)
   declare product_id: string;

   @BelongsTo(() => ProductModel)
   declare product: ProductModel;

   @ForeignKey(() => OrderModel)
   @AllowNull(false)
   @Column(DataType.STRING)
   declare order_id: string;

   @BelongsTo(() => OrderModel)
   declare order: ProductModel;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare quantity: number;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare name: string;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare price: number;
}
