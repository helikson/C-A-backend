import { Table, PrimaryKey, Model, Column, DataType, AllowNull } from "sequelize-typescript";

@Table
export default class Customer extends Model {
   @PrimaryKey
   @Column(DataType.STRING)
   declare id: string;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare name: string;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare street: string;

   @AllowNull(false)
   @Column(DataType.NUMBER)
   declare number: number;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare zipcode: string;

   @AllowNull(false)
   @Column(DataType.STRING)
   declare city: string;

   @AllowNull(false)
   @Column(DataType.BOOLEAN)
   declare active: boolean;

   @AllowNull(false)
   @Column(DataType.NUMBER)
   declare rewardPoints: number;
}
