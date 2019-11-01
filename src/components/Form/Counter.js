import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increaseCount = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count
    });
  };
  decreaseCount = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count
    });
  };
  render() {
    return (
      <div className="counter">
        <button className="change" onClick={this.decreaseCount}>
          -
        </button>
        <h4 className="display">{this.state.count}</h4>
        <button className="change" onClick={this.increaseCount}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
