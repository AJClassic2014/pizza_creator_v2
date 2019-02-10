import React from 'react';
import App from './App';
import PageLeft from './PageLeft';
import PageRight from './PageRight';
import Ingredients from './Ingredients';

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedToppings: [],
    };
    this.toggleSelectedTopping = this.toggleSelectedTopping.bind(this);
  }

  toggleSelectedTopping(topping) {
    const { selectedToppings } = this.state;
    const { name } = topping;
    const isActive = selectedToppings.find(selectedTopping => selectedTopping.name === name);
    if (isActive) {
     // let result = [];
      this.setState({
        selectedToppings: selectedToppings.filter(selectedTopping => (selectedTopping.name !== name)),
      });
      return;
    }
    this.setState({
      selectedToppings: [
        ...this.state.selectedToppings,
        topping,
      ]
    });
  }

  render() {
    return (
      <div className="container">
        <PageLeft>
          <Ingredients selectedToppings={this.state.selectedToppings}/>
        </PageLeft>
        <PageRight>
          <App 
          selectedToppings={this.state.selectedToppings} 
          toggleSelectedTopping={this.toggleSelectedTopping}
          />
        </PageRight>
      </div>
    );
  }
}

export default Container;