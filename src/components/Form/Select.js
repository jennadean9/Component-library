import React from "react";
import "./Select.css";

import Arrow from "../icons/arrow.png";

const Select = props => {
  let classList = "";
  let types = "";

  if (types.includes(props.type)) {
    classList += ` select-${props.size}`;
  }
  if (props.small) {
    classList += ` select-small`;
  }
  if (props.med) {
    classList += ` select-med`;
  }
  if (props.large) {
    classList += ` select-large`;
  }

  return (
    <form>
      <select className={classList}>
        <option default> {props.value} </option>
        <option>jenna</option>
        <option>is</option>
        <option>cool</option>
      </select>
    </form>
  );
};

export default Select;
