import React from 'react';

const Topping = ({
    imgSrc,
    name,
    className,
    onClick,
  }) => (
    <div className={`${className} topping`} onClick={onClick}>
      <img src={imgSrc} alt="name" />
      <div><span>{name}</span></div>  
    </div>
  );

  export default Topping;