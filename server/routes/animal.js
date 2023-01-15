const express = require('express');
const router = express.Router();

// import controler
const animalController = require('../controllers/animalController');

router.get('/', animalController.selectAnimal, (req, res) => {
  console.log('animalRouter!');
  console.log(res.locals.animal);
  res.status.apply(200).json(res.locals.animals);
});

module.exports = router;