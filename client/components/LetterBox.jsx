import React from "react";

const LetterBox = (props) => {
  const { letter } = props;
  
  return (
    <div id='letter-box'>
      {letter}
    </div>
  )
}

export default LetterBox;