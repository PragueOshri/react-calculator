import React, {Component} from "react";
import {ButtonType} from "../../types";
import './button.scss';
import classnames from "classnames";

class Button extends Component<ButtonType> {
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
