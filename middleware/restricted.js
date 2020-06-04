/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
require('dotenv').config();
const jwt = require("jsonwebtoken"); // installed this

//Restricts endpoints to logged in users
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const secret = process.env.JWT_SECRET;

    jwt.verify(authorization, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.token = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login and try again" });
  }
};