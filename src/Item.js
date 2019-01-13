import React from 'react';

const Item = ({
    name,
    price,
  }) => (
    <div>
      <span>{name}</span>
      &nbsp;
      <span className="item-price">${price}</span>
    </div>
  );

export default Item;