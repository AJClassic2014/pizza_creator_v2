import React from 'react';

const TextBox = ({ title, value, onChange }) => (
    <div className="textBox">
      <label>{title}</label>
      <input value={value} onChange={({ 
        target: { value }}) => onChange(value)} type="text" />  
    </div>
  );

  export default TextBox;