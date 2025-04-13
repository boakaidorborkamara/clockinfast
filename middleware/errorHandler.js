function errorHandler(err, req, res, next) {
  console.log("get error", err);
  res.status(500).json(err.errors ? err.errors : err);
}

module.exports = { errorHandler };
