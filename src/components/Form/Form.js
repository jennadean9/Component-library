import React from "react";
import "./Form.css";
import Button from "../Button/Button.js";

const Form = props => {
  let classList = "";
  let types = "";

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
  if (props.label) {
    return (
      <form className="voucher">
        <input className={classList} placeholder={props.value} />
        <Button label="Redeem" type="primary"></Button>
      </form>
    );
  }

  return (
    <form>
      {props.title}
      <input type="text" className={classList} placeholder={props.value} />
    </form>
  );
};

export default Form;
