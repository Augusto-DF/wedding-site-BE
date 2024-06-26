const path = require("path");

const ROOT = path.join(__dirname);
const GIFT_IMAGES_DIR = path.join(__dirname, "/assets/gifts_images");

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

module.exports = { ROOT, GIFT_IMAGES_DIR, validateEmail };
