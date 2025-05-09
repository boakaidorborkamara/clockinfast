const express = require("express");
const { connectDB } = require("./db_config/db-config");
const { errorHandler } = require("./middleware/errorHandler");

// ROUTERS
const indexRouter = require("./router/indexRouter");
const userRouter = require("./router/userRouter");

connectDB();
const PORT = 3000;
const app = express();

app.use(express.json());

// routes
app.use(indexRouter);
app.use(userRouter);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
