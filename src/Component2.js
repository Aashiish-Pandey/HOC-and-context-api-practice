import React from 'react';
import withCounter from './withCounter';

const Component2 = props => {
  return (
    <div>
      <h1>count is : {props.count}</h1>
      <button onClick={props.increaseCount}>Inc by 10</button>
    </div>
  );
};

export default withCounter(Component2, 10);
