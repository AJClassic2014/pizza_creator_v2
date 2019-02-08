import React from 'react';
import SectionTitle from './SectionTitle';
import Topping from './Topping';

const Ingredient = ({
    //toppings, 
    name,
    imgSrc
    //toggleSelectedTopping,
  }) => (
      <div className="ingredient">
        <div className={`${name} group`}>{name}</div>
        <div className={`${name} group`}>{name}</div>
        <div className={`${name} group`}>{name}</div>
      </div>
  );

  export default Ingredient;