const User = require('../models/userModels');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;

  // check if the username or password is not empty
  if (!username || !password)
    return next({
      log: 'userController.createUser: ERROR: missing username or password',
      message: { err: 'username or password cannot be empty' }
    });

  // check if the username already exists
  User.findOne({ username }).then(data => {
    if (data !== null)
      return next({
        log: `userController.createUser: ERROR: username already been taken. User: ${data}`,
        message: { err: 'username has already been taken. Please choose a diffrent one.' }
      });
  });

  // if the username has not been taken, create a new user
  User.create({ username, password }, (err, newUser) => {
    if (err)
      return next({
        log: `userController.createUser: ERROR: ${err}`,
        message: { err: 'Create user failed' }
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
      message: { err: 'username or password cannot be empty' }
    });

  User.findOne({ username }, (err, user) => {
    // check if the username exist
    if (!user)
      return next({
        log: 'userController.verifyUser: ERROR: user not found',
        message: { err: 'Wrong username or password. Please try again.' }
      });

    if (err)
      return next({
        log: `userController.createUser: ERROR: ${err}`,
        message: { err: 'An error occured on the server side' }
      });

    // check the password
    const strPassword = password.toString(); // convert the password to string to match the userSchema password type
    // if (!bcrypt.compareSync(strPassword, user.password))
    //   return next({
    //     log: 'userController.verifyUser: ERROR: password does not match',
    //     status: 401,
    //     message: { err: 'Wrong username or password. Please try again.' }
    //   });
    // res.locals.user = user;
    // return next();
    bcrypt
      .compare(strPassword, user.password)
      .then(result => {
        if (!result)
          return next({
            log: 'userController.verifyUser: ERROR: password does not match',
            status: 401,
            message: { err: 'Wrong username or password. Please try again.' }
          });
        re.locals.user = user;
        return;
      })
      .catch(err =>
        next({
          log: `userController.verifyUser: ERROR: ${err}`,
          message: { err: 'An error occured on the server side' }
        })
      );
  });
};

module.exports = userController;
