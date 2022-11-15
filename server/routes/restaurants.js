// import express
const express = require('express');
// create router
const restaurantsRouter = express.Router();

//require restaurant controller
const restaurantCtrler = require('../controllers/restaurants.js');

//create routes
restaurantsRouter.get('/', restaurantCtrler.findRestaurant);

//export router
module.exports = restaurantsRouter;
