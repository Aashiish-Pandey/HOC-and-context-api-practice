import React, { Component } from "react";

const withIncrement = (WrappedComponent, num) => {
  class updatedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 100,
      };
    }

    setCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + num };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          setCount={this.setCount}
          {...this.props}
        />
      );
    }
  }

  return updatedComponent;
};

export default withIncrement;
