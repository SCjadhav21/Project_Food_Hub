const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    const decoded = jwt.verify(token, process.env.secretKey);
    if (decoded) {
      const { userId, userName } = decoded;
      req.body.userId = userId;
      req.body.userName = userName;
      next();
    } else {
      res.send({ error: true, msg: "login frist" });
    }
  } else {
    res.send({ error: true, msg: "login frist" });
  }
};

module.exports = { authenticate };
