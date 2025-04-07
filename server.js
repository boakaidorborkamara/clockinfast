const express = require("express");
const { connectDB } = require("./db_config/db-config");

connectDB();
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
