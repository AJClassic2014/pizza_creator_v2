import React from 'react';
import SectionTitle from './SectionTitle';
import Item from './Item';

const Summary = ({
    selectedToppings = [],
    basePrice = 0,
  }) => (
    <div>
      <SectionTitle><h2>Summary</h2></SectionTitle>
      <Item name="Pizza" price={basePrice} />
      {selectedToppings.map(({ name, price }) => (<Item name={name} key={name} price={price} />))}
      <hr />
      <div className="total-price">
        Total: ${selectedToppings.reduce((total, { price }) => (total + price), basePrice)}
      </div>
    </div>
  );

  export default Summary;