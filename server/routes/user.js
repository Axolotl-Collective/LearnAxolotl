const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const sessionController = require('../controllers/sessionController.js');
const cookieController = require('../controllers/cookieController.js');

router.get('/', sessionController.isLoggedIn, (req, res) =>
  res.status(200).json(res.locals.isAvtive)
);

router.post(
  '/signup',
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.post(
  '/login',
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).json(res.locals.user)
);

module.exports = router;
