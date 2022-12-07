const express = require('express');
const restaurantsRouter = express.Router();

const restaurantCtrler = require('../controllers/restaurants.js');

restaurantsRouter.get('/', restaurantCtrler.findRestaurant);

module.exports = restaurantsRouter;
