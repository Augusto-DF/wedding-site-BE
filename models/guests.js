const sqlite = require("better-sqlite3");
const { validateEmail } = require("../utils");
const db = new sqlite(process.env.DB_NAME);

const list = () => {
  const qry = `
        SELECT * FROM guests
    `;

  return db.prepare(qry).all();
};

const create = (guest) => {
  let optionalFields = { message: null, phone: null };

  const qry = `
        INSERT INTO guests (name, email, adults_number, kids_number, message, phone) VALUES (@name, @email, @adults_number, @kids_number, @message, @phone)
    `;

  return db.prepare(qry).run({ ...optionalFields, ...guest });
};

const validateGuest = (guest) => {
  const REQUIRED_FIELDS = ["name", "phone", "adults_number", "kids_number"];

  let error = {};

  REQUIRED_FIELDS.forEach((field) => {
    if (!Object.keys(guest).includes(field))
      error = { ...error, [field]: `is a required field.` };
  });

  if (!Object.keys(error).length) return true;

  return { error };
};

module.exports = { list, create, validateGuest };
