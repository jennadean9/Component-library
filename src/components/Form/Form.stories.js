import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form.js";

storiesOf("Form", module)
  .add("Email Small", () => (
    <Form value="email" type="email" title="email" placeholder="email" medium />
  ))
  .add("Email Medium", () => (
    <Form value="email" type="email" title="email" placeholder="email" small />
  ))
  .add("Email Large", () => (
    <Form value="email" type="email" title="email" placeholder="email" large />
  ))
  .add("Voucher", () => (
    <Form value="Voucher code" label="Redeem" type="text" small />
  ))
  .add("Voucher Large", () => (
    <Form value="Voucher code" label="Redeem" type="text" large />
  ));
