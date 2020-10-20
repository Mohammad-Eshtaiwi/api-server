function timestamp(req, res, next) {
  //   console.log(new Date().toDateString());
  req.requestTime = new Date().toDateString();
  next();
}

module.exports = timestamp;
