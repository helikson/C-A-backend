import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import CreateProductUseCase from "@/useCase/product/create/create.product.useCase";
import ProductRepository from "@/infrastructure/product/repository/sequelize/product.repository";
import ListProductUseCase from "@/useCase/product/list/list.product.useCase";

export async function productRouter(app: FastifyInstance) {
   app.post("/", async (req: FastifyRequest, res: FastifyReply) => {
      const useCase = new CreateProductUseCase(new ProductRepository());

      const { type, name, price } = req.body as any;

      try {
         const productDTO = {
            type,
            name,
            price
         };

         const output = await useCase.execute(productDTO);
         res.send(output);
      } catch (error) {
         res.status(500).send(error);
      }
   });

   app.get("/", async (_req: FastifyRequest, res: FastifyReply) => {
      const useCase = new ListProductUseCase(new ProductRepository());

      try {
         const output = await useCase.execute({});
         res.send(output);
      } catch (error) {
         res.status(500).send(error);
      }
   });
}
