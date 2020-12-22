import "./index.css";
import React from "react";
import data from "./data.json";
import Products from "./component/Products.js";
import Filter from "./component/Filter";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      brand: "",
      type: "",
      sort: "",
    };
  }
  brandFilter = (event) => {
    const brand = event.target.value;
    if (brand) {
      this.setState(() => ({
        brand,
        products: data.products.filter(
          (product) => product.brandName === brand
        ),
      }));
    } else {
      this.setState(() => ({
        brand,
        products: data.products,
      }));
    }
  };
  typeFilter = (event) => {
    const type = event.target.value;
    if (type) {
      this.setState(() => ({
        type,
        products: data.products.filter(
          (product) => product.type.indexOf(type) >= 0
        ),
      }));
    } else {
      this.setState(() => ({
        type,
        products: data.products,
      }));
    }
  };
  sortFilter = (event) => {
    const sort = event.target.value;
    this.setState((prevState) => ({
      sort,
      products: prevState.products.sort((a, b) =>
        sort === "Highest"
          ? a.price > b.price
            ? -1
            : 1
          : sort === "Lowest"
          ? a.price > b.price
            ? 1
            : -1
          : a._id > b._id
          ? 1
          : -1
      ),
    }));
  };
  render() {
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">Online Supermarket</a>
        </header>
        <main>
          <div>
            <Filter
              count={this.state.products.length}
              brand={this.state.brand}
              type={this.state.type}
              sort={this.state.sort}
              brandFilter={this.brandFilter}
              typeFilter={this.typeFilter}
              sortFilter={this.sortFilter}
            />
            <Products products={this.state.products} />
          </div>
          <div>Shopping cart</div>
        </main>
        <footer>All right reserved</footer>
      </div>
    );
  }
}
