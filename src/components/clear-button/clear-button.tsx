import React, {Component} from 'react';
import './clear-button.scss';
import {ButtonAction, ButtonObject} from "../../types";
import classnames from "classnames";

type ClearButtonProps = {
    onClick: ButtonAction;
};

class ClearButton extends Component<ClearButtonProps> {
    private clearButton: ButtonObject = {
        symbol: "C",
        type: 'clear',
        action: this.props.onClick
    };

    render() {
        return (
            <button
                className={classnames("calculatorButton", this.clearButton.type)}
                onClick={() => this.clearButton.action(this.clearButton.symbol)}
            >
                {this.clearButton.symbol}
            </button>
        );
    }
}

export default ClearButton;