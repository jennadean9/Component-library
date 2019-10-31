import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form.js";

storiesOf("Form", module)
  .add("Form", () => <Form type="email" />)
  .add("Form", () => <Form type="select" />);
