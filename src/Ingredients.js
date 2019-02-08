import React from 'react';
import Ingredient from './Ingredient';
import { ToppingsContext } from "./App";

class Ingredients extends React.Component {
    render () {
      return (
        <ToppingsContext.Consumer>
          {({ selectedToppingsList }) => (
           <div className="ingredients">
             {selectedToppingsList}
           {/* {selectedToppingsList.map((topping) => {
             const { name, labelImage } = topping;
            
              return <Ingredient key={name} name={name} imgSrc={labelImage}/>
           
           })}  */}
         </div>
          )}
        </ToppingsContext.Consumer>
      );
    }
  }

  export default Ingredients;