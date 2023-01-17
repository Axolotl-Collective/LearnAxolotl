import React, { useEffect, useRef } from "react";

const GuessLetters = (props) => {
  const { guessLetter, guessed } = props;
  console.log(guessed)

  const letterInput = useRef(null);

  const checkInput = () => {
    const letter = letterInput.current.value.toUpperCase();
    console.log(letter)

    if(letter.length > 1) throw new Error('must be single character')

    return guessLetter(letter)
  }

  const handleKeyDown = event => {
    if(event.key === 'Enter') {
      return checkInput();
    }
  }

  useEffect(() => {
    
    letterInput.current.value = '';
  })

  return(
    <div>
      <input ref={letterInput} type='text' id='input-field' placeholder="Guess a letter"></input>
      <button onClick={checkInput} onKeyDown={handleKeyDown}>Submit</button>
    </div>
  )
};

export default GuessLetters;