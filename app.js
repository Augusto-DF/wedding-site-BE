const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const allowedOrigins = [
  "http://localhost:3000",
  "https://mariaemiguel.com.br",
  /* Other origins */
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    else return callback(new Error("Not allowed by CORS"));
  },
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log("PORT", process.env.PORT);
  console.log("DB_NAME", process.env.DB_NAME);
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
