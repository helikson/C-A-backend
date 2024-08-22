import { Table, PrimaryKey, Model, Column, DataType, AllowNull } from "sequelize-typescript";

@Table
export default class Product extends Model {
   @PrimaryKey
   @Column(DataType.STRING)
   declare id: string;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare name: string;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare description: string;

   @AllowNull(false)
   @Column(DataType.NUMBER)
   declare price: number;
}
