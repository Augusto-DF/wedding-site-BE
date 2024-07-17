const { GIFT_LIST } = require("../assets/data/giftList");
const giftModel = require("./gifts");
const fs = require("fs");
const sqlite = require("better-sqlite3");
const db = new sqlite(process.env.DB_NAME);

const create = () => {
  const createGuestsTableQuery = `
    CREATE TABLE IF NOT EXISTS guests 
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT,
            adults_number INTEGER NOT NULL,
            kids_number  INTEGER NOT NULL,
            message TEXT,
            phone TEXT NOT NULL
        )
  `;

  // Add gifts table
  const createGiftsTableQuery = `
    CREATE TABLE IF NOT EXISTS gifts 
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            cost REAL NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            photo BLOB NOT NULL,
            photo_type TEXT NOT NULL,
            categories TEXT NOT NULL,
            was_gifted BOOLEAN DEFAULT 0,
            payment_method TEXT,
            guest_name TEXT,
            guest_cpf TEXT,
            guest_email TEXT,
            guest_phone TEXT           
        )
  `;

  db.prepare(createGiftsTableQuery).run();
  db.prepare(createGuestsTableQuery).run();
};

const populate = () => {
  console.log("path", GIFT_LIST);

  for (const { label, value, category, photo } of GIFT_LIST) {
    const imageBuffer = fs.readFileSync(photo);
    const photo_type = photo.substring(photo.length - 4, photo.length);
    const formattedGift = {
      name: label,
      cost: value,
      categories: JSON.stringify(category),
      photo: imageBuffer,
      photo_type,
    };

    giftModel.create(formattedGift);
  }
};

module.exports = { create, populate };
