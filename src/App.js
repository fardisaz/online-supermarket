import "./index.css";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">Online Supermarket</a>
        </header>
        <main>Content</main>
        <footer>All right reserved</footer>
      </div>
    );
  }
}
