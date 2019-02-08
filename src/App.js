import React, { Component } from 'react';
import Toppings from './Toppings';
import Form from './Form';
import Summary from './Summary';
import Button from './Button';

export const ToppingsContext = React.createContext({
  selectedToppingsList: this.state.selectedToppings
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      postcode: '',
      confirmEmail: '',
      contactNumber: '',
      toppings: [{
        name: 'Anchovy',
        labelImage: './assets/anchovy.svg',
        price: 0.99,
      }, {
        name: 'Bacon',
        labelImage: './assets/bacon.svg',
        price: 0.99,
      }, {
        name: 'Basil',
        labelImage: './assets/basil.svg',
        price: 0.99,
      }, {
        name: 'Chili',
        labelImage: './assets/chili.svg',
        price: 0.99,
      }, {
        name: 'Mozzarella',
        labelImage: './assets/mozzarella.svg',
        price: 0.99,
      }, {
        name: 'Mushroom',
        labelImage: './assets/mushroom.svg',
        price: 0.99,
      }, {
        name: 'Olive',
        labelImage: './assets/olive.svg',
        price: 0.99,
      }, {
        name: 'Onion',
        labelImage: './assets/onion.svg',
        price: 0.99,
      }, {
        name: 'Pepper',
        labelImage: './assets/pepper.svg',
        price: 0.99,
      }, {
        name: 'Pepperoni',
        labelImage: './assets/pepperoni.svg',
        price: 0.99,
      }, {
        name: 'Peppers',
        labelImage: './assets/peppers.svg',
        price: 0.99,
      }, {
        name: 'Sweetcorn',
        labelImage: './assets/sweetcorn.svg',
        price: 0.99,
      }],
      selectedToppings: [],
      basePrice: 9.99,
    };
    this.toggleSelectedTopping = this.toggleSelectedTopping.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPostcodeChange = this.onPostcodeChange.bind(this);
    this.onConfirmEmailChange = this.onConfirmEmailChange.bind(this);
    this.onContactNumberChange = this.onContactNumberChange.bind(this);
    this.toggleSelectedTopping = this.toggleSelectedTopping.bind(this);       
  }
  onNameChange(value) {
    this.setState({
      name: value,
    });
  }
  onEmailChange(value) {
    this.setState({
      email: value,
    });
  }
  onAddressChange(value) {
    this.setState({
      address: value,
    });
  }
  onPostcodeChange(value) {
    this.setState({
      postcode: value,
    });
  }
  onConfirmEmailChange(value) {
    this.setState({
      confirmEmail: value,
    });
  }
  onContactNumberChange(value) {
    this.setState({
      contactNumber: value,
    });
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
    const { 
      toppings, 
      selectedToppings, 
      basePrice, 
      name, 
      address, 
      email,
      postcode,
      contactNumber,
      confirmEmail,
    } = this.state;
    return (
      <ToppingsContext.Provider value={{selectedToppingsList: this.state.selectedToppings}}>
      <div>
        <Form 
          name={name} 
          onNameChange={this.onNameChange} 
          email={email} 
          onEmailChange={this.onEmailChange} 
          address={address}
          onAddressChange={this.onAddressChange} 
          postcode={postcode} 
          onPostcodeChange={this.onPostcodeChange} 
          contactNumber={contactNumber} 
          onContactNumberChange={this.onContactNumberChange} 
          confirmEmail={confirmEmail}
          onConfirmEmailChange={this.onConfirmEmailChange} 
         />
        <Toppings 
          toppings={toppings} 
          selectedToppings={selectedToppings} 
          toggleSelectedTopping={this.toggleSelectedTopping} 
        />
        <Summary selectedToppings={selectedToppings} basePrice={basePrice} />
        <Button 
          selectedToppings={selectedToppings} 
          name={name} 
          email={email} 
          address={address}
          postcode={postcode}
          contactNumber={contactNumber}
        />
      </div>
      </ToppingsContext.Provider>
    )
  }
}

export default App;
