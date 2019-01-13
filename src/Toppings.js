import React from 'react';
import SectionTitle from './SectionTitle';
import Topping from './Topping';

const Toppings = ({
    toppings, 
    selectedToppings, 
    toggleSelectedTopping,
  }) => (
    <div>
      <SectionTitle><h2>Choose Your Toppings</h2></SectionTitle>
      <div className="toppings">
        {toppings.map((topping) => {
          const { name, labelImage } = topping;
          return(
            <Topping 
              className={selectedToppings.find(
                selectedTopping => selectedTopping.name === name
                ) && 'active'}
              onClick={() => toggleSelectedTopping(topping)}
              key={name}
              name={name} 
              imgSrc={labelImage} 
            />
          )
        })} 
      </div>
    </div>
  );

  export default Toppings;