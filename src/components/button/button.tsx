import React, {Component} from "react";
import './button.scss';
import classnames from "classnames";

interface ButtonProps {
    symbol: string;
    cols: number;
    action: (symbol?: string) => void;
}

class Button extends Component<ButtonProps> {
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
