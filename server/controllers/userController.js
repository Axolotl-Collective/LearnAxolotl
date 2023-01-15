const User = require('../models/userModels');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;

  // check if the username or password is not empty
  if (!username || !password)
    return next({
      log: 'userController.createUser: ERROR: missing username or password',
      message: 'username or password cannot be empty'
    });

  // check if the username already exists
  User.findOne({ username }).then(data => {
    if (data !== null)
      return next({
        log: `userController.createUser: ERROR: username already been taken. User: ${data}`,
        message: 'username has already been taken. Please choose a diffrent one.'
      });
  });

  // if the username has not been taken, create a new user
  User.create({ username, password }, (err, newUser) => {
    if (err)
      return next({
        log: `userController.createUser: ERROR: ${err}`,
        message: 'Create user failed'
      });
    res.locals.user = newUser;
    return next();
  });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;

  // check if the username or password is not empty
  if (!username || !password)
    return next({
      log: 'userController.verifyUser: ERROR: missing username or password',
      message: 'username or password cannot be empty'
    });

  User.findOne({ username }, (err, user) => {
    // check if the username exist
    if (!user) return next({ log: 'userController.verifyUser: ERROR: user not found' });

    if (err)
      return next({
        log: `userController.createUser: ERROR: ${err}`,
        message: 'An error occured on the server side'
      });

    // check the password
    const strPassword = password.toString(); // convert the password to string to match the userSchema password type
    if (!bcrypt.compareSync(strPassword, user.password))
      return next({
        log: 'userController.verifyUser: ERROR: password does not match',
        status: 401,
        message: 'Wrong username or password'
      });
    res.locals.user = user;
    return next();
  });
};

module.exports = userController;
