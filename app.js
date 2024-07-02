//require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log("PORT", process.env.PORT);
  console.log("DB_NAME", process.env.DB_NAME);
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
