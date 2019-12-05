import React from "react";
import "./Product.css";
import laptop from "./../images/laptop.png";
import headphones from "./../images/headphones.png";
import stars from "./../icons/rate.png";

const Product = props => {
  let classList = "";
  //   const types = ["block", "inline"];
  const price = "$499";
  const crossPrice = "$599";
  //   if (type.includes(props.type)) {
  //     classList += ` product-${props.type}`;
  //   }
  if (props.fade) {
    classList += ` product-fade`;
  }
  if (props.border) {
    classList += ` product-border`;
  }
  if (props.large) {
    classList += ` product-large`;
  }

  return (
    <section class={classList}>
      <div className="thumbnail">
        <img class="photo" src={props.image} />
        <hr></hr>
        {props.title}
        <img class="rate" src={stars}></img>
        <div class="prices">
          <span class="price">{price}</span>
          <span class="cross">{crossPrice}</span>
        </div>
      </div>
    </section>
  );
};

export default Product;
