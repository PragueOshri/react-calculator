import React, { Component } from "react";
import './button.scss';
import classnames from "classnames";

class Button extends Component {
  render() {
    return (
      // <div className={`column-${this.props.cols}`}>

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
