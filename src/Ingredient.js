import React from 'react';

const Ingredient = ({
    name,
    imgSrc,
  }) => (
      <div className={`${name} ingredient`}>
        <div></div>
        <div></div>
        <div></div>
        {(name==="Onion"||"Pepper"||"Olive"||"Chili"||"Mushroom")&&<div></div>}
      </div>
  );

  export default Ingredient;