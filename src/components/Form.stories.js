import React from "react";
import { storiesOf } from "@storybook/react";
import Arrow from "./arrow.png";

import Form from "./Form.js";

storiesOf("Form", module)
  .add("Email Small", () => (
    <Form value="email" type="email" placeholder="email" small />
  ))
  .add("Email Medium", () => (
    <Form value="email" type="email" placeholder="email" medium />
  ))
  .add("Email Large", () => (
    <Form value="email" type="email" placeholder="email" large />
  ))
  .add("Select Small", () => (
    <Form type="select" value="select" icon="Arrow" medium />
  ))
  .add("Select Medium", () => (
    <Form type="select" value="select" icon="Arrow" small />
  ))
  .add("Select Large", () => (
    <Form type="select" value="select" icon="Arrow" large />
  ));
