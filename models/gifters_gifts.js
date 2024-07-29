const sql = require("better-sqlite3");
const db = new sql(process.env.DB_NAME);

const gifter_giftTableQuery = `
    CREATE TABLE gifter_gift (
        payment_method TEXT NOT NULL,
        gifter_id INTEGER,
        gift_id INTEGER,
        PRIMARY KEY (gifter_id, gift_id),
        FOREIGN KEY (gifter_id) REFERENCES gifters(id),
        FOREIGN KEY (gift_id) REFERENCES gifts(id)
    )
`;

const create = (obj) => {
  const qry = `
        INSERT OR IGNORE INTO gifter_gift (payment_method, gifter_id, gift_id ) VALUES (
            @payment_method,
            @gifter_id, 
            @gift_id
        )
    `;

  return db.prepare(qry).run(obj);
};

const list = () => {
  const qry = `SELECT * FROM gifter_gift`;
  return db.prepare(qry).all();
};

module.exports = {
  gifter_giftTableQuery,
  create,
  list,
};
