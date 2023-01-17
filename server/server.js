const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

// Routers
const userRouter = require('./routes/user.js');
const animalRouter = require('./routes/animal.js');

mongoose.set('strictQuery', true);

mongoose
  .connect(
    'mongodb+srv://lillian:lillian@soloproject.dbm2wrr.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Conneted to the database');
  });

// require('dotenv').config(); // TRYING COMMENTING THIS OUT, MAY NOT NEED ENV FILE

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.get('/', (req, res) => res.json('Welcome to the app'));

// DELIVER HOMEPAGE TEST
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// sending to userRouter
app.use('/user', userRouter);

// sending to animalRouter
app.use('/animal', animalRouter);

//404 handler
app.use((req, res) => res.status(404).json('Page Not Found'));

//Global error handler
app.use((err, req, res, next) => {
  // UNCOMMENT BELOW TO SEE ERROR WHEN DEBUGGING
  // console.log(err);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

module.exports = app;
