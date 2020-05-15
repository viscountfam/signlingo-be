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

/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/

const db = require('../data/dbconfig');

const tblUsers = 'users';//define the users table name

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {//Gets a list of all users
  return db(tblUsers).select('id', 'email');
}

function findBy(filter) {//finds a user by a given field value
  return db(tblUsers).where(filter);
}

async function add(user) {
  //.returning("*") is for postgres and will throw a warning for sqlite3
  //but does not hinder the operation of sqlite3
   const users = await db(tblUsers).insert(user).returning("*");

  return users;//returns user Object
}

function findById(id) {
  return db(tblUsers)
    .where({ id })
    .first();
}
