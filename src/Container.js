import React from 'react';
import App from './App';
import PageLeft from './PageLeft';
import PageRight from './PageRight';
import Ingredients from './Ingredients';

const Container = () => (
  <div className="container">
    <PageLeft>
    <Ingredients/>
    </PageLeft>
    <PageRight>
      <App />
    </PageRight>
  </div>
);

export default Container;