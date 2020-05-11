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

const db = require('../data/dbconfig');

const tblUsers = 'users';//define the users table name

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db(tblUsers).select('id', 'email');
}

function findBy(filter) {
  return db(tblUsers).where(filter);
}

async function add(user) {
  const users = await db(tblUsers).insert(user).returning("*");

  return users;
}

function findById(id) {
  return db(tblUsers)
    .where({ id })
    .first();
}
