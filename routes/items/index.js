export default function (fastify, opts, done) {
  fastify.get("/", function (request, reply) {
    fastify.pg.query("SELECT * FROM postgres", function (err, result) {
      if (err) {
        console.error("Error executing the query:", err);
        reply.status(500).send("Internal Server Error");
        return;
      }

      reply.send(result);
    });
    // const client = await fastify.pg.connect();
    //   try {
    //     const { rows } = await client.query("SELECT * FROM postgres");
    //     reply.send(rows);
    //   } catch (error) {
    //     reply.send(error);
    //   }
  });
  done();
}
