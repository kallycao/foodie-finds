const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/users.js');

userRouter.get('/', userController.getUser);

userRouter.post('/', userController.createUser);

userRouter.post('/favorites', userController.addFav);

userRouter.get('/favorites', userController.findFavs);

userRouter.delete('/favorites', userController.deleteFav);

module.exports = userRouter;
