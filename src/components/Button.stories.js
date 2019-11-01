import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button.js";
import Heart from "./hearts.png";
import ShoppingBag from "./shopping-bag.png";

storiesOf("Button", module)
  .add("Primary", () => <Button type="primary" value="Do Something" />)
  .add("Primary Outline", () => (
    <Button type="primary" value="Do Something" outline />
  ))
  .add("Primary Fade", () => (
    <Button type="primary" value="Do Something" fade />
  ))
  .add("Primary Large", () => (
    <Button type="primary" value="Do Something" large />
  ))
  .add("Primary Outline Large", () => (
    <Button type="primary" value="Do Something" large outline />
  ))
  .add("Primary Fade Large", () => (
    <Button type="primary" value="Do Something" large fade />
  ))
  .add("Danger", () => <Button type="danger" value="Do Something" />)
  .add("Danger Outline", () => (
    <Button type="danger" value="Do Something" outline />
  ))
  .add("Danger Fade", () => <Button type="danger" value="Do Something" fade />)
  .add("Danger Large", () => (
    <Button type="danger" value="Do Something" large />
  ))
  .add("Danger Large Outline", () => (
    <Button type="danger" value="Do Something" large outline />
  ))
  .add("Danger Large Fade", () => (
    <Button type="danger" value="Do Something" fade large />
  ))
  .add("Success", () => <Button type="success" value="Do Something" />)
  .add("Success Outline", () => (
    <Button type="success" value="Do Something" outline />
  ))
  .add("Success Fade", () => (
    <Button type="success" value="Do Something" fade />
  ))
  .add("Success Large", () => (
    <Button type="success" value="Do Something" large />
  ))
  .add("Success Large Outline", () => (
    <Button type="success" value="Do Something" outline large />
  ))
  .add("Success Large Fade", () => (
    <Button type="success" value="Do Something" fade large />
  ))
  .add("Warning", () => <Button type="warning" value="Do Something" />)
  .add("Warning Outline", () => (
    <Button type="warning" value="Do Something" outline />
  ))
  .add("Warning Fade", () => (
    <Button type="warning" value="Do Something" fade />
  ))
  .add("Warning Large", () => (
    <Button type="warning" value="Do Something" large />
  ))
  .add("Warning Large Outline", () => (
    <Button type="warning" value="Do Something" outline large />
  ))
  .add("Warning Large Fade", () => (
    <Button type="warning" value="Do Something" fade large />
  ))
  .add("Default", () => <Button type="default" value="Do Something" />)
  .add("Default Outine", () => (
    <Button type="default" value="Do Something" outline />
  ))
  .add("Default Fade", () => (
    <Button type="default" value="Do Something" value="Do Something" fade />
  ))
  .add("Default Large", () => (
    <Button type="default" value="Do Something" large />
  ))
  .add("Default Large Outline", () => (
    <Button type="default" value="Do Something" outline large />
  ))
  .add("Default Large Fade", () => (
    <Button type="default" value="Do Something" fade large />
  ))
  .add("Add to Cart", () => (
    <Button type="primary" value="Add to Cart" icon="ShoppingBag" fade />
  ))
  .add("Add to Favorites", () => (
    <Button type="primary" value="Add to Favorites" icon="Heart" fade />
  ))
  .add("Favorites", () => <Button type="primary" icon="Heart" fade />)
  .add("Shop", () => <Button type="primary" icon="ShoppingBag" fade />);
