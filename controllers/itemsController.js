export const getItems = async (request, reply) => {
  try {
    const { rows } = await request.server.pg.query("SELECT * FROM item");
    reply.send(rows);
  } catch (error) {
    reply.send(error);
  }
};

export const getItem = async (request, reply) => {
  try {
    const { rows } = await request.server.pg.query(
      "SELECT * FROM item WHERE id=$1",
      [request.params.id]
    );
    reply.send(rows[0]);
  } catch (error) {
    reply.send(error);
  }
};

export const postItem = async (request, reply) => {
  try {
    const { rows } = await request.server.pg.query(
      "INSERT INTO item(item_name) VALUES($1) ",
      [request.body.item_name]
    );
    reply.code(201).send({ msg: "Item added", item: rows[0] });
  } catch (error) {
    reply.send(error);
  }
};

export const putItem = async (request, reply) => {
  try {
    const { rows } = await request.server.pg.query(
      "UPDATE item SET item_name=$1 WHERE id=$2",
      [request.body.item_name, request.params.id]
    );
    reply.code(200).send({ msg: "Item updated", item: rows[0] });
  } catch (error) {
    reply.send(error);
  }
};

export const deleteItem = async (request, reply) => {
  try {
    const { rows } = await request.server.pg.query(
      "DELETE FROM item WHERE id=$1",
      [request.params.id]
    );
    reply.code(200).send({ msg: "Item deleted", item: rows[0] });
  } catch (error) {
    reply.send(error);
  }
};
