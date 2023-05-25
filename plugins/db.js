import fp from "fastify-plugin";
import psql from "@fastify/postgres";

export default fp(async (fastify, opts, done) => {
  try {
    fastify.register(psql, {
      connectionString: "postgres://iush:8502@localhost:5432/item_database",
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
  done();
});
