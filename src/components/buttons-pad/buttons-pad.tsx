import React, {Component} from "react";
import Button from "../button/button";
import {ButtonAction, ButtonObject} from "../../types";
import './buttons-pad.scss';

type ButtonPadProps = {
    onNumberClick: ButtonAction;
    onClearClick: ButtonAction;
    onResultClick: ButtonAction;
    onOperationClick: ButtonAction;
};

class ButtonsPad extends Component<ButtonPadProps> {
    private buttons: ButtonObject[] = [
        {symbol: "7", type: 'number', action: this.props.onNumberClick},
        {symbol: "8", type: 'number', action: this.props.onNumberClick},
        {symbol: "9", type: 'number', action: this.props.onNumberClick},
        {symbol: "+", type: 'operator', action: this.props.onOperationClick},

        {symbol: "4", type: 'number', action: this.props.onNumberClick},
        {symbol: "5", type: 'number', action: this.props.onNumberClick},
        {symbol: "6", type: 'number', action: this.props.onNumberClick},
        {symbol: "-", type: 'operator', action: this.props.onOperationClick},

        {symbol: "1", type: 'number', action: this.props.onNumberClick},
        {symbol: "2", type: 'number', action: this.props.onNumberClick},
        {symbol: "3", type: 'number', action: this.props.onNumberClick},
        {symbol: "x", type: 'operator', action: this.props.onOperationClick},

        {symbol: ".", type: 'number', action: this.props.onNumberClick},
        {symbol: "0", type: 'number', action: this.props.onNumberClick},
        {symbol: "=", type: 'result', action: this.props.onResultClick},
        {symbol: "÷", type: 'operator', action: this.props.onOperationClick},

        {symbol: "C", type: 'clear', action: this.props.onClearClick},
    ];

    render() {
        return (
            <div className="buttonsWrapper">
                {this.buttons.map((button) => (
                    <Button
                        key={button.symbol}
                        symbol={button.symbol}
                        type={button.type}
                        action={button.action}
                    />
                ))}
            </div>
        );
    };
}

export default ButtonsPad;