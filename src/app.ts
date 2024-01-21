import fastify from "fastify";
import { transactionRoutes } from "./routes/transactions";
import cookie from "@fastify/cookie";

export const app = fastify();

// app.addHook("preHandler", async (request, reply) => {}); middleware global
app.register(cookie);
app.register(transactionRoutes, {
  prefix: "transactions",
});
