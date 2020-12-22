import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <div className="infoItem">
          {this.props.count} products are avialable.
        </div>
        <div class="flex-container">
          <div>
            Brand :{"  "}
            <select value={this.props.brand} onChange={this.props.brandFilter}>
              <option value="">All</option>
              <option value="ja!">ja!</option>
              <option value="Bauer">Bauer</option>
              <option value="Thomas">Thomas</option>
            </select>
          </div>
          <div>
            Type :{"  "}
            <select value={this.props.type} onChange={this.props.typeFilter}>
              <option value="">All</option>
              <option value="Bio">Bio</option>
              <option value="New">New</option>
              <option value="Glutenfrei">Glutenfrei</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>
          <div>
            Sort by :{"  "}
            <select value={this.props.sort} onChange={this.props.sortFilter}>
              <option>Latest</option>
              <option value="Lowest">Lowest</option>
              <option value="Highest">Highest</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
