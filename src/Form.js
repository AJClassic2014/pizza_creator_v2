import React from 'react';
import SectionTitle from './SectionTitle';
import TextBox from './TextBox';

const Form = ({ 
    name, 
    email, 
    address, 
    postcode, 
    confirmEmail, 
    contactNumber, 
    onNameChange, 
    onEmailChange, 
    onAddressChange, 
    onPostcodeChange, 
    onConfirmEmailChange, 
    onContactNumberChange, 
  }) => (
    <div>
      <SectionTitle><h2>Enter Your Details</h2></SectionTitle>
      <div className="formFields">
        <TextBox value={name} onChange={onNameChange} title="Name" />  
        <TextBox value={email} onChange={onEmailChange} title="Email" />  
        <TextBox value={address} onChange={onAddressChange} title="Address" />  
        <TextBox value={postcode} onChange={onPostcodeChange} title="Postcode" />  
        <TextBox value={confirmEmail} onChange={onConfirmEmailChange} title="Confirm Email" />  
        <TextBox value={contactNumber} onChange={onContactNumberChange} title="Contact Number" />  
      </div>
    </div>
  );

  export default Form;