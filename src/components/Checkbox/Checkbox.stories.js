import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.js";

storiesOf("Checkbox", module)
  .add("Black Checkbox", () => <Checkbox />)
  .add("Checkbox", () => <Checkbox blue label="" />)
  .add("Label Box", () => (
    <Checkbox label="Suck my FAT COCK!!! (Everyone except Paula and Joe and Ren)" />
  ));
