import React from "react";
import LetterBox from "./LetterBox.jsx";
import GuessLetters from "./GuessLetters.jsx";
import { useState, useEffect } from "react";
import BoxNoBorder from "./BoxNoBorder.jsx";

const Game = (props) => {
  //state hooks for rendering guessed letters
  const animalObj = {
    img: 'https://visitseaquest.com/wp-content/uploads/2022/05/SeaQuests-Guide-to-Axolotls-img-900x450.webp',
    name: 'Axolotl',
    description: 'A paedomorphic salamander closely related to the tiger salamander. Axolotls are unusual among amphibians in that they reach adulthood without undergoing metamorphosis. Instead of taking to the land, adults remain aquatic and gilled. The species was originally found in several lakes underlying what is now Mexico City, such as Lake Xochimilco and Lake Chalco. These lakes were drained by Spanish settlers after the conquest of the Aztec Empire, leading to the destruction of much of the axolotl\'s natural habitat.'
  }
  
  const { animal, setGame } = props;
  console.log(animal);

  const [guessed, guessState] = useState([]);
  
  const guessLetter = letter => {
    const newArr = [...guessed];
    newArr.push(letter);

    return guessState(newArr);
  }
  
  useEffect(() => {
    console.log('the current guessed letters are: ', guessed);
    
    if(guessed.length >= 5) setGame(true);
  }, [guessed])
  
  const animalNameArray = animal.name.normalize("NFD").replace(/\p{Diacritic}/gu, "").toUpperCase().split('');
  console.log(animalNameArray);
  
  const renderLetters = animalNameArray.map(el => {
    if(guessed.includes(el) || el === '-' || el === '\'') return <LetterBox letter={el}/>
    else if(el === ' ') return <BoxNoBorder />;
    else return <LetterBox />
  }) 

  return(
    <div className="game">
      <div id='letter-container'>
        {renderLetters}
      </div>
      <GuessLetters guessLetter={guessLetter} guessed={guessed}/>
    </div>
  )
}

export default Game;