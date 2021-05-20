import React, { Component } from 'react';

const withCounter = (wrappedComponent, num) => {
  class IncrementCounter extends Component {
    state = {
      count: 0
    };

    increaseCount = () => {
      this.setState(prevState => ({ count: prevState.count + num }));
    };

    render() {
      return (
        <wrappedComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
          {...this.props}
        />
      );
    }
  }

  return IncrementCounter;
};

export default withCounter;
