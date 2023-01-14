import React from "react";

const MainGame = (props) => {
  return (
    <div className="game">
      <img id='animal-img'></img>
      <div>Animal Name</div>
      <div>Guessing Area</div>
      <button>Submit</button> 
    </div>
  )
};

export default MainGame;