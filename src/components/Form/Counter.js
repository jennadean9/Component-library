import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      max: this.props.max,
      min: this.props.min
    };
  }
  increase = () => {
    if (this.state.count < this.state.max) {
      let count = this.state.count + 1;
      this.setState({
        count: count
      });
    }
  };
  decrease = () => {
    if (this.state.count > this.state.min) {
      let count = this.state.count - 1;
      this.setState({
        count: count
      });
    }
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
