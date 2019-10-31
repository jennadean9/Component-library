import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button.js";

storiesOf("Button", module)
  .add("Primary", () => <Button type="primary" />)
  .add("Primary Large", () => <Button type="primary" large />)
  .add("Danger", () => <Button type="danger" />)
  .add("Danger Large", () => <Button type="danger" large />)
  .add("Success", () => <Button type="success" />)
  .add("Success Large", () => <Button type="success" large />)
  .add("Warning", () => <Button type="warning" />)
  .add("Warning Large", () => <Button type="warning" large />)
  .add("Default", () => <Button type="default" />)
  .add("Default Large", () => <Button type="default" large />);
