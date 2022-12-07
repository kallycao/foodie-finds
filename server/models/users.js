// require database
const db = require('../db.js');

//create user, param = obj
const createUser = (user) => {
  // const { username, password } = user;
  // return db.User.create({ username: username, password: password });
  return db.User.create(user);
};
//get user
const getUser = (user) => {
  return db.User.findOne(user);
};
//get favs
const findFavs = (userId) => {
  return db.Favorites.find(userId);
};
const addFav = (id, info) => {
  return db.Favorites.create(id, info);
};

const deleteFav = (nameId) => {
  return db.Favorites.findByIdAndDelete(nameId);
};

module.exports = {
  createUser,
  getUser,
  findFavs,
  addFav,
  deleteFav,
};
