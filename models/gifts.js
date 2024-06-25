const sql = require("better-sqlite3");
const db = new sql(process.env.DB_NAME);

const list = () => {
  const qry = `
        SELECT * FROM gifts
    `;

  const result = db.prepare(qry).all();

  return result;
};

const create = (gift) => {
  const qry = `
        INSERT INTO gifts (name, cost, photo, photo_type, categories ) VALUES (
        @name, 
        @cost,
        @photo,
        @photo_type,
        @categories
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

const formatGiftResponse = (gift) => {
  console.log("gift", gift);
  //Format image
  const imageBase64 = gift.photo.toString("base64");
  const type = gift.photo_type.substring(1, gift.photo_type.length);
  const imageSrc = `data:image/${type};base64,${imageBase64}`;

  //Format Categories
  const formatedCategories = JSON.parse(gift.categories);

  const formatedGift = {
    ...gift,
    photo_src: imageSrc,
    categories: formatedCategories,
  };

  //Delete useless fileds to user
  delete formatedGift.photo;
  delete formatedGift.photo_type;

  return formatedGift;
};

module.exports = { list, create, update, remove, formatGiftResponse };
