import React from "react";
import "./Button.css";
// import heart from "../images/hearts.png"

const Button = props => {
  let classList = "";

  let types = ["primary", "danger", "success", "warning", "default"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.outline) {
    classList += ` button-outline`;
  }
  if (props.fade) {
    classList += ` button-fade`;
  }
  if (props.icon) {
    classList += ` button-icon`;
  }

  return (
    <button class={classList} onClick={props}>
      <img class="icon" src={props.icon} />
      {props.value}
    </button>
  );
};

export default Button;
