import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import CreateCustomerUseCase from "@/useCase/customer/create/create.customer.useCase";
import ListCustomerUseCase from "@/useCase/customer/list/list.customer.useCase";
import CustomerRepository from "@/infrastructure/customer/repository/sequelize/customer.repository";

export async function customerRouter(app: FastifyInstance) {
   app.post("/", async (req: FastifyRequest, res: FastifyReply) => {
      const useCase = new CreateCustomerUseCase(new CustomerRepository());

      const { name, address: { street, city, number, zip } } = req.body as any;

      try {
         const customerDTO = {
            name,
            address: {
               street,
               city,
               number,
               zip
            }
         };

         const output = await useCase.execute(customerDTO);
         res.send(output);
      } catch (error) {
         res.status(500).send(error);
      }
   });

   app.get("/", async (_req: FastifyRequest, res: FastifyReply) => {
      const useCase = new ListCustomerUseCase(new CustomerRepository());

      try {
         const output = await useCase.execute({});
         res.send(output);
      } catch (error) {
         res.status(500).send(error);
      }
   });
}
