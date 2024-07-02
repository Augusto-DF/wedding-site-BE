const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "development"; // default to 'development' if NODE_ENV is not set

dotenv.config({ path: `.env.${env}` });

// Ensure the default .env file is also loaded if it exists
dotenv.config({ path: ".env" });

require("./app.js"); // Replace with your entry file

//require("./app.js");
