const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const allowedOrigins = [
  "http://172.23.112.1:3000",
  "http://192.168.0.7:3000",
  "http://localhost:3000",
  "http://195.200.7.134:3011/",
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
