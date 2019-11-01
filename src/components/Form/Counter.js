import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increase = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count
    });
  };
  decrease = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count,
      value: Math.max(count.value - 1, 0)
    });
  };
  decrement = () => {
    this.setState(prevState => ({
      value: Math.max(prevState.value - 1, 0)
    }));
  };
  render() {
    return (
      <div className="counter">
        <button className="change" onClick={this.decrease}>
          -
        </button>
        <h4 className="display">{this.state.count}</h4>
        <button className="change" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
