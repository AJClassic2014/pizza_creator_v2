import React from 'react';

const Button = ({ 
    selectedToppings,
    name,
    address,
    email,
    contactNumber,
    postcode,
  }) => (
    <div>
      <button 
        id="palce-order"
        type="submit" 
        onClick={() => {
          if (!selectedToppings || !selectedToppings.length) {
            return;
          }
          let totalPrice = 9.99;
          selectedToppings.forEach(({ price }) => {
            totalPrice += price;
          });
          alert(`Thx ${name}, 
          your order details: ${selectedToppings.map(({ 
          name }) => name).join(', ')}, price:${totalPrice.toFixed(2)}. 
          
          Your pizza will delivery to ${address}, postcode:${postcode}
          We will contact you by this phone number: ${contactNumber}
          Please check your email ${email} for details.`);
        }}
      >
        Place order
      </button>  
    </div>
  );

  export default Button;