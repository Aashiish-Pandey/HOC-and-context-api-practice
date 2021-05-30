import React, { useContext, Component } from "react";
import withIncrement from "./withIncrement";

class Component1 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.setCount()}>Increment Counter</button>
      </div>
    );
  }
}

export default withIncrement(Component1, 100);
