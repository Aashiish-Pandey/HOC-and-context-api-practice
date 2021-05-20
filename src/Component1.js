import React from 'react';
import withCounter from './withCounter';

const Component1 = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>count is : {count}</h1>
      <button onClick={props.increaseCount}>Inc by 5</button>
    </div>
  );
};

export default Component1;
