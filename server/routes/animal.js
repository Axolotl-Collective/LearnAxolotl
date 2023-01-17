const express = require('express');
const router = express.Router();

// import controler
const animalController = require('../controllers/animalController');

router.get('/', animalController.getAnimalCount, animalController.getRandomAnimal, (req, res) => {
  // console.log('animal controller!!');
  // console.log(res.locals.animal);
  res.status(200).json(res.locals.animal);
});

module.exports = router;