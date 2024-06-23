const express = require("express");
const routes = require("./routes/index");

const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:8080`);
});
