import React, { useRef } from "react";

const GuessLetters = (props) => {
  const { guessLetter, guessed } = props;
  console.log(guessed)
  console.log(guessLetter);

  const letterInput = useRef(null);

  return(
    <div>
      <input ref={letterInput} type='text' id='input-field' placeholder="Guess a letter"></input>
      <button onClick={() => guessLetter(letterInput.current.value)}>Submit</button>
    </div>
  )
};

export default GuessLetters;