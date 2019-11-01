import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import laptop from "./../images/laptop.png";
import headphones from "./../images/headphones.png";
import Product from "./Product.js";

storiesOf("Product", module)
  .add("Product Border", () => (
    <Product type="block" image={laptop} title="Apple Macbook Pro" />
  ))
  .add("Product Fade", () => (
    <Product type="block" image={laptop} title="Apple Macbook Pro" fade />
  ))
  .add("Product Large Border", () => (
    <Product
      type="block"
      image={laptop}
      title="Apple Macbook Pro"
      large
      border
    />
  ))
  .add("Product Headphones", () => (
    <Product
      type="block"
      image={headphones}
      title="Beats Solo 2 On Ear
        Headphones - Black"
      clear
    />
  ));
