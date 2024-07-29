const sql = require("better-sqlite3");
const db = new sql(process.env.DB_NAME);

const gifterTableQuery = `
    CREATE TABLE IF NOT EXISTS gifters
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            cpf TEXT NOT NULL UNIQUE,
            phone TEXT NOT NULL UNIQUE
        )
`;

const create = (gifter) => {
  const qry = `
        INSERT INTO gifters (name, cpf, phone ) VALUES (
        @name, 
        @cpf,
        @phone  
        )
    `;

  const info = db.prepare(qry).run(gifter);

  const gifterId = info.lastInsertRowid;

  const getGifterQuery = `
    SELECT * FROM gifters WHERE rowid = @rowid
  `;

  const insertedGifter = db.prepare(getGifterQuery).get({ rowid: gifterId });

  return insertedGifter;
};

const list = () => {
  const qry = `
    SELECT 
            g.id AS gifter_id,
            g.name AS gifter_name,
            g.phone AS gifter_phone,
            gg.payment_method AS payment_method,	
            gt.name AS gift_name,
            gt.cost AS gift_cost
        FROM 
            gifters g
        JOIN 
            gifter_gift gg ON g.id = gg.gifter_id
        JOIN 
            gifts gt ON gg.gift_id = gt.id
        ORDER BY 
            g.id, gt.name
    `;
  return db.prepare(qry).all();
};

const update = (targetId, gifter) => {
  const setQuery = Object.keys(gifter)
    .map((key) => `${key} = @${key}`)
    .join(",");

  const qry = `
    UPDATE gifts 
      SET
        ${setQuery}
      WHERE id = ${targetId}
  `;

  return db.prepare(qry).run(gifter);
};

const find = (cpf) => {
  const qry = `
        SELECT * FROM gifters WHERE cpf = ? 
    `;

  const result = db.prepare(qry).get(cpf);

  return result;
};

module.exports = { gifterTableQuery, create, list, update, find };
