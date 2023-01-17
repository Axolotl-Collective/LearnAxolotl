const Session = require('../models/sessionModels');

const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  // first check if there's already an active session under this user
  const isActive = await Session.findOne({ cookieId: res.locals.user._id }).exec();
  if (isActive) {
    res.locals.isActive = true;
    return next();
  }
  // if there's no active session, create a new session
  Session.create({ cookieId: res.locals.user._id }, (err, session) => {
    if (err)
      return next({
        log: `ssionController.startSession: ERROR: ${err}`,
        message: { err: 'An error occured on the server side' }
      });
    return next();
  });
};

sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieId: req.cookies.ssid }, (err, session) => {
    if (err)
      return next({
        log: `sessionController.isLoggedIn: ERROR: ${err}`,
        message: { err: 'An error occured on the server side' }
      });
    if (!session) {
      //should we redirect to login or signup page or send some data back?
      return next({
        log: 'sessionController.isLoggedIn: ERROR: no active session exist',
        message: { err: 'An error occured on the server side' }
      });
    }
    return next();
  });
};

module.exports = sessionController;
