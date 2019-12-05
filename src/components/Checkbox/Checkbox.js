import React, { Component } from "react";
import "./Checkbox.css";
import blackCheck from "../icons/blackcheck.png";
import blueCheck from "../icons/bluecheck.png";
import emptyBlue from "../icons/emptyblue.png";
import emptyBlack from "../icons/emptywhite.png";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleCheck: false
    };
  }
  handleCheck = e => {
    e.preventDefault();
    this.setState({ toggleCheck: !this.state.toggleCheck });
  };

  render() {
    return (
      <div className="checkbox" onClick={this.handleCheck}>
        {this.state.toggleCheck ? (
          <div className="checked">
            <img src={this.props.blue ? blueCheck : blackCheck} />
          </div>
        ) : (
          <div className="empty">
            <img src={this.props.blue ? emptyBlue : emptyBlack} />
          </div>
        )}
        <label>{this.props.label}</label>
      </div>
    );
  }
}
