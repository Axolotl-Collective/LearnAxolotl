const Animal = require('../models/animalModels');

const animalController = {

  getAnimal(req, res, next) {
    // console.log('getAnimal method!!');
    // Animal.aggregate.sample(1),
    Animal.findOne({name: "African Elephant"},
      (err, animal) => {
        if (err) {
          return next({
            log: `animalController.selectAnimal: ERROR: ${err}`,
            message: 'An error occured on the server side'
          });
        } else {
          console.log(animal);
          res.locals.animal = animal;
          return next();
        }
      }
    )
  }

};

module.exports = animalController;