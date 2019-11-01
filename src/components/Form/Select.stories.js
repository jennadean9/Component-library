import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "./Select.js";

storiesOf("Select", module)
  .add("Select Small", () => <Select value="select" medium border />)
  .add("Select Medium", () => <Select value="select" small border />)
  .add("Select Large", () => <Select value="select" large border />)
  .add("Select Fade Small", () => <Select value="select" medium fade />)
  .add("Select Fade Medium", () => <Select value="select" small fade />)
  .add("Select Fade Large", () => <Select value="select" large fade />);
