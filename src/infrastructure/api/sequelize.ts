import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";

import CustomerModel from '@/infrastructure/customer/repository/sequelize/customer.model';
import ProductModel from '@/infrastructure/product/repository/sequelize/product.model';
import OrderModel from '@/infrastructure/order/repository/sequelize/order.model';
import OrderItemModel from '@/infrastructure/order/repository/sequelize/order-item.model';

export async function setupDB(): Promise<Sequelize> {
   const dialect = process.env.DB_DIALECT as Dialect;
   const host = process.env.DB_HOST;
   const username = process.env.DB_USERNAME;
   const password = process.env.DB_PASSWORD;
   const database = process.env.DB_NAME;
   const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined;

   const sequelize = new Sequelize({
      dialect,
      host,
      database,
      port,
      username,
      password,
      logging: false,
      define: {
         freezeTableName: false,
         timestamps: true,
         paranoid: true,
      },
   });

   try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
   } catch (error) {
      console.error('Unable to connect to the database:', error);
   }

   await sequelize.addModels([CustomerModel, ProductModel, OrderModel, OrderItemModel]);
   await sequelize.sync({ force: true });

   return sequelize;
}
