const model = require('../models/users.js');

const createUser = (req, res) => {
  const { username, password } = req.body;
  model
    .createUser({ username: username, password: password })
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(400).send('Unable to create user'));
};

const getUser = (req, res) => {
  const username = req.query.username;
  model
    .getUser({ username: username })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => res.status(400).send('Unable to retrieve user'));
};
const addFav = (req, res) => {
  const { user_id, name, category, phone, price, rating, location, url, image_url, favorite } =
    req.body;
  model
    .addFav({
      user_id: user_id,
      name: name,
      category: category,
      phone: phone,
      price: price,
      rating: rating,
      location: location,
      url: url,
      image_url: image_url,
      favorite: favorite,
    })
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(400).send('Unable to add favorite'));
};

const findFavs = (req, res) => {
  const user_id = req.query.params;
  model
    .findFavs({ user_id: user_id })
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send('Unable to find favorites'));
};

const deleteFav = (req, res) => {
  const { _id } = req.body;
  model
    .deleteFav({ _id: _id })
    .then(() => res.status(200).send('Successful deletion'))
    .catch((err) => res.status(400).send('Unable to delete'));
};

module.exports = {
  createUser,
  getUser,
  addFav,
  findFavs,
  deleteFav,
};
