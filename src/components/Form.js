import React from "react";
import "./Form.css";
import Arrow from "./arrow.png";

const Form = props => {
  let classList = "";
  let types = ["email", "select", "value"];

  if (types.includes(props.type)) {
    classList += ` input-${props.size}`;
  }
  if (props.small) {
    classList += ` input-small`;
  }
  if (props.med) {
    classList += ` input-med`;
  }
  if (props.large) {
    classList += ` input-large`;
  }
  return (
    <form>
      {props.value}
      <input type="text" className={classList} placeholder={props.value} />
      <img src={props.icon} />
    </form>
  );
};

export default Form;
