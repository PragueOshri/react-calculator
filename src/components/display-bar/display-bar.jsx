import React, { Component } from "react";
import "./display-bar.css";

class DisplayBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          className="input"
          type="text"
          value={this.props.currentEquation}
        ></input>
        {this.props.result}
      </div>
    );
  }
}

export default DisplayBar;
