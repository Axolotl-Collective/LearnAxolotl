import React, { useEffect, useState } from "react";
import EmptyLetterBox from "./EmptyLetterBox.jsx";
import LetterBox from "./LetterBox.jsx";
import GuessLetters from "./GuessLetters.jsx";

const MainGame = (props) => {
  const animalObj = {
    img: 'https://visitseaquest.com/wp-content/uploads/2022/05/SeaQuests-Guide-to-Axolotls-img-900x450.webp',
    name: 'Axolotl',
    description: 'A paedomorphic salamander closely related to the tiger salamander. Axolotls are unusual among amphibians in that they reach adulthood without undergoing metamorphosis. Instead of taking to the land, adults remain aquatic and gilled. The species was originally found in several lakes underlying what is now Mexico City, such as Lake Xochimilco and Lake Chalco. These lakes were drained by Spanish settlers after the conquest of the Aztec Empire, leading to the destruction of much of the axolotl\'s natural habitat.'
  }

  const [guessed, guessState] = useState([]);

  const guessLetter = letter => {
    const newArr = [...guessed];
    newArr.push(letter);

    return guessState(newArr);
  }

  useEffect(() => {
    console.log('the current guessed letters are: ', guessed);
  })

  const animalNameArray = animalObj.name.toUpperCase().split('');
  
  const renderLetters = animalNameArray.map(el => {
    if(guessed.includes(el)) return <LetterBox letter={el}/>
    else return <EmptyLetterBox />
  }) 

  
  return (
    <div className="game">
      <img id='animal-img' src={animalObj.img}></img>
      <div id='game-letters'>
        {renderLetters}
      </div>
      <div id='guess'>
        <GuessLetters guessLetter={guessLetter} guessed={guessed}/>
      </div>
    </div>
  )
};

export default MainGame;