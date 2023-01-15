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
    console.log('session: ', session);
    if (err)
      return next({
        log: `ssionController.startSession: ERROR: ${err}`,
        message: 'An error occured on the server side'
      });
    return next();
  });
};

module.exports = sessionController;
