import React, { useContext } from "react";
import { myContext } from "./myContext";
import withIncrement from "./withIncrement";

const Component2 = (props) => {
  return (
    <div>
      <h2>{props.count}</h2>
      <button onClick={() => props.setCount()}>Decrement</button>
    </div>
  );
};

export default withIncrement(Component2, -10);
