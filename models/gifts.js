const sql = require("better-sqlite3");
const db = new sql(process.env.DB_NAME);

const POSSIBLE_PAYMENTS_METHODS = ["give", "pix"];

const list = (filters = undefined, order = undefined) => {
  let qry = `SELECT * FROM gifts`;

  if (filters?.length)
    qry =
      qry +
      ` WHERE (${filters.map((category) => "categories LIKE ?").join(" OR ")})`;

  if (order)
    qry = qry + ` ORDER BY cost ${order === "higher_value" ? "DESC" : "ASC"}`;

  if (filters?.length) {
    const result = db
      .prepare(qry)
      .all(...filters.map((filter) => `%${filter}%`));

    return result;
  } else {
    const result = db.prepare(qry).all();

    return result;
  }
};

const find = (id) => {
  const qry = `
        SELECT * FROM gifts WHERE id = ? 
    `;

  const result = db.prepare(qry).get(id);

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

const chooseAGiftValidate = (body) => {
  const REQUIRED_FIELDS = [
    "giftIds",
    "payment_method",
    "guest_name",
    "guest_cpf",
    "guest_phone",
  ];

  const { giftIds } = body;

  let error = {};

  REQUIRED_FIELDS.forEach((field) => {
    if (!Object.keys(body).includes(field))
      error = { ...error, [field]: `is a required field.` };
  });

  if (giftIds?.length)
    giftIds.forEach((targetId) => {
      const { was_gifted, id, name } = find(targetId);

      if (was_gifted)
        error = {
          ...error,
          [`gift_${id}`]: `${name} was choosen for another one`,
        };
    });

  if (!POSSIBLE_PAYMENTS_METHODS.includes(body.payment_method))
    error = { ...error, payment_method: "invalid payment method" };

  return { error };
};

module.exports = {
  list,
  create,
  update,
  remove,
  formatGiftResponse,
  chooseAGiftValidate,
};
