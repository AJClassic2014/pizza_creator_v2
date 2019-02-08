import React from 'react';

const PageLeft = ({
  children
}) => (
    <div className="item item-left">
      <div className="pizza-board">
        <div className="pizza-base">
          {children}
        </div>
      </div>
    </div>
  );

export default PageLeft;