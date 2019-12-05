import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter.js";

storiesOf("Counter", module).add("Counter", () => (
  <Counter count={0} max={10} min={0} />
));
