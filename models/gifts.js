const sql = require("better-sqlite3");
const db = new sql(process.env.DB_NAME);

const list = () => {
  const qry = `
        SELECT * FROM gifts
    `;

  const result = db.prepare(qry).all();
  console.log(result);

  return result;
};

const create = (gift) => {
  const qry = `
        INSERT INTO gifts (name, cost, photo) VALUES (
        @name, 
        @cost,
        @photo
        )
    `;

  return db.prepare(qry).run(gift);
};

const update = (targetId, gift) => {
  const setQuery = Object.keys(gift)
    .map((key) => `${key} = @${key}`)
    .join(",");

  const qry = `
    UPDATE gifts 
      SET
        ${setQuery}
      WHERE id = ${targetId}
  `;

  return db.prepare(qry).run(gift);
};

const remove = (id) => {
  const qry = "DELETE FROM gifts WHERE id = ?";

  const deleteStmt = db.prepare(qry);

  return deleteStmt.run(id);
};

module.exports = { list, create, update, remove };
