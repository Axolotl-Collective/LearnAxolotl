const Animal = require('../models/animalModels');

const animalController = {

  // RETURN NUM OF ANIMAL DOCS IN COLLECTION
  getAnimalCount(req, res, next) {
    Animal.estimatedDocumentCount().then((result) => {
      // console.log(result);
      // console.log(Math.floor(Math.random() * result));
      res.locals.animalCount = result;
      next();
    })
  },

  // RETURNS RANDOM ANIMAL DOC FROM COLLECTION
  getRandomAnimal(req, res, next) {
    Animal.findOne({}, null, {skip: Math.random() * res.locals.animalCount},
      (err, animal) => {
        if (err) {
          return next({
            log: `animalController.selectAnimal: ERROR: ${err}`,
            message: 'An error occured on the server side'
          });
        } else {
          // console.log(animal);
          res.locals.animal = animal;
          return next();
        }
      }
    )
  }

};

module.exports = animalController;