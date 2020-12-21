import React, { Component } from "react";
import formatFunction from "../utils";

export default class Products extends Component {
  render() {
    return (
      <div className="prodList">
        {this.props.products.map((product) => (
          <ul key={product._id}>
            <li className="itemList">
              <img
                src={product.image}
                alt={product.title}
                className="imageList"
              />
              <div className="info">
                <p>{product.title}</p>
                <p>{formatFunction(product.price)}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
