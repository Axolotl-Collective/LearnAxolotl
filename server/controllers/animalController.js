const Animal = require('../models/animalModels');

animalController = {

  selectAnimal(req, res, next) {
    console.log('animal Controller!');
    Animal.findOne({name: "Irrawaddy Dolphin"},
      (err, animal) => {
        if (err)
          return next({
            log: `animalController.selectAnimal: ERROR: ${err}`,
            message: 'An error occured on the server side'
          });
        else {
          res.locals.animal = animal;
          return next();
        }
      })
  }

};

module.exports = animalController;