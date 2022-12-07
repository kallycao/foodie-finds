require('dotenv').config();

const express = require('express');
const path = require('path');

const userRouter = require('./routes/users.js');
const restaurantsRouter = require('./routes/restaurants.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded());

app.use('/users', userRouter);

app.use('/restaurants', restaurantsRouter);

app.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}`);
