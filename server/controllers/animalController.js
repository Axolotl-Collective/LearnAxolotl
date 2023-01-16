const Animal = require('../models/animalModels');

const animalController = {

  getAnimal(req, res, next) {
    console.log('getAnimal method!!');
    // const { name } = req.params;
    // console.log(name);
    Animal.findOne({name: "African Elephant"},
      (err, animal) => {
        if (err) {
          console.log(err);
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