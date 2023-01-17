import React from "react";

const Description = props => {
  const { animal } = props;

  return (
    <div id='description-box'>
      {animal.description}
    </div>
  )
};

export default Description;