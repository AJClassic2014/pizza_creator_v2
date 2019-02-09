import React from 'react';
import Ingredient from './Ingredient';


class Ingredients extends React.Component {
  
  render() {
    const {
      selectedToppings,
    } = this.props;
    return (
      <React.Fragment>      
        {selectedToppings.map((topping) => {
             const { name, labelImage } = topping;          
              return <Ingredient key={name} name={name} imgSrc={labelImage}/>          
           })} 
      </React.Fragment>
    );
  }
}

export default Ingredients;