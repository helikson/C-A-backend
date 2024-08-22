import fastify, { FastifyInstance } from 'fastify';
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';

import { customerRouter } from './routes/customer.route';
import { productRouter } from './routes/product.route';

const createServer = async (): Promise<FastifyInstance> => {
   const server: FastifyInstance = fastify();

   await server.register(fastifyCors);
   await server.register(fastifyHelmet);

   await server.register(fastifySwagger);
   await server.register(fastifySwaggerUi, { routePrefix: "/docs" });

   server.register(customerRouter, { prefix: "/customer" });
   server.register(productRouter, { prefix: "/product" });

   return server;
};

export const app = await createServer();
