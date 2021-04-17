import React, { Component } from "react";
import './button.scss';
import classnames from "classnames";

class Button extends Component {
  render() {
    return (
      <button
        className={classnames("calc-button", `column-${this.props.cols}`)}
        onClick={() => this.props.action(this.props.symbol)}
      >
        {this.props.symbol}
      </button>
    );
  }
}

export default Button;
