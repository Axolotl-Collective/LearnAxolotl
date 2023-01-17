const User = require('../models/userModels');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.user._id, { httpOnly: true });
  return next();
};

cookieController.verifySSIDCookie = (req, res, next) => {
  const _id = req.cookies.ssid;
  User.findOne({ _id }, (err, user) => {
    if (err)
      return next({
        log: `cookieController.verifySSIDCookie: ERROR: ${err}`,
        message: { err: 'error occurred on the server side' }
      });
    if (!user)
      return next({
        log: 'cookieController.verifySSIDCookie: ERROR: no user information has been found with this cookie',
        message: { err: 'invalid access' }
      });
    // should we store anything in res.locals?
    return next();
  });
};

module.exports = cookieController;
