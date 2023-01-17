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

  useEffect(() => {
    
    letterInput.current.value = '';
  })

  return(
    <div id='guess'>
      <input ref={letterInput} type='text' id='input-field' placeholder="Guess a letter"></input>
      <button onClick={checkInput}>Submit</button>
    </div>
  )
};

export default GuessLetters;