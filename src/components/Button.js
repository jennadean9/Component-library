import React from "react";
import "./Button.css";
// import { type } from "os";

const Button = props => {
  let classList = "";

  let types = [
    "primary",
    "primary-outline",
    "primary-fade",
    "danger",
    "danger-outline",
    "danger-fade",
    "success",
    "success-outline",
    "success-fade",
    "warning",
    "warning-outline",
    "warning-fade",
    "default",
    "default-outline",
    "default-fade"
  ];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }

  return (
    <button class={classList} onClick={props}>
      Do Something
    </button>
  );
};

export default Button;
