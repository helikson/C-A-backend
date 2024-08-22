import { app } from "./fastify";
import { setupDB } from "./sequelize";

await setupDB();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen({ port }, (err: Error | null, address: string) => {
   if (err) {
      throw err;
   }

   console.log(`Listen on: ${address}`)
});
