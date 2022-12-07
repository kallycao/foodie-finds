const mongoose = require('mongoose');
const db = mongoose
  .connect('mongodb://localhost:27017/foodieFinds')
  .then(() => 'Connection established database')
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxLength: 60,
  },
  password: {
    type: String,
    required: true,
    maxLength: 20,
  },
});

const User = mongoose.model('User', userSchema);

const favoritesSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: true,
  },
});

const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = {
  User,
  Favorites,
};
