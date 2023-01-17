import React, { useEffect, useState } from "react";
import axios from 'axios';
import Game from "./Game.jsx";
import Description from "./Description.jsx";

const MainGame = (props) => {
  const animalObj = {
    img: 'https://visitseaquest.com/wp-content/uploads/2022/05/SeaQuests-Guide-to-Axolotls-img-900x450.webp',
    name: 'Axolotl',
    description: 'A paedomorphic salamander closely related to the tiger salamander. Axolotls are unusual among amphibians in that they reach adulthood without undergoing metamorphosis. Instead of taking to the land, adults remain aquatic and gilled. The species was originally found in several lakes underlying what is now Mexico City, such as Lake Xochimilco and Lake Chalco. These lakes were drained by Spanish settlers after the conquest of the Aztec Empire, leading to the destruction of much of the axolotl\'s natural habitat.'
  }

   
  //state hooks for setting animal
  const [animal, setAnimal] = useState({...animalObj})
  const [gameFinished, setGame] = useState(false);

  const getAnimal = () => {
    axios.get('http://localhost:3000/animal')
      .then(res => {
        const { img, name, description } = res.data;

        const newAnimal = {
          img: img,
          name: name,
          description: description
        }

        console.log('fetched animal is: ', newAnimal);
        return setAnimal(newAnimal);
      })
      .catch(() => setAnimal(animalObj));
  }

  useEffect(() => {
    getAnimal();
  }, []);

  return (
    <div className="gameContainer">
      <img id='animal-img' src={animal.img}></img>
      {gameFinished ? <Description animal={animal}/> : <Game animal={animal} setGame={setGame}/>}
    </div>
  )
};

export default MainGame;