const express = require("express");
const { connectDB } = require("./db_config/db-config");
const userRouter = require("./router/userRouter");

connectDB();
const PORT = 3000;
const app = express();

// routes
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
