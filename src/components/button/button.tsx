import React, {Component} from "react";
import {ButtonObject} from "../../types";
import './button.scss';
import classnames from "classnames";

class Button extends Component<ButtonObject> {
    render() {
        return (
            <button
                className={classnames("calculatorButton", this.props.type)}
                onClick={() => this.props.action(this.props.symbol)}
            >
                {this.props.symbol}
            </button>
        );
    }
}

export default Button;
