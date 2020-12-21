import "./index.css";
import React from "react";
import data from "./data.json";
import Products from "./component/Products.js";

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
  render() {
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">Online Supermarket</a>
        </header>
        <main>
          <div>
            <Products products={this.state.products} />
          </div>
        </main>
        <footer>All right reserved</footer>
      </div>
    );
  }
}
