/*
** This file and the folder that it is in was generated by the
** Node Package dukeapi found at: https://www.npmjs.com/package/dukeapi
**
** Version: 1.0.0
** Author: David H. Isakson II
** License: MIT
** Github: https://github.com/ikeman32/duke-api-wauth
** Contact: david.isakson.ii@gmail.com
*/

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require(`morgan`);

//route to endpoint routers
const configureRoutes = require("../routes/router");

const server = express();

server.use(helmet());
server.use(morgan("combined"));
server.use(express.json());
server.use(cors());


configureRoutes(server);

server.get("/", (req, res) => {
  res.send("The Server is working ");
});

module.exports = server;