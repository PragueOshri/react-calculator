import React, {Component} from "react";
import Button from "../button/button";
import {ButtonAction, ButtonType} from "../../types";
import './buttons-pad.scss';

type ButtonPadProps = {
    onNumberClick: ButtonAction;
    onClearClick: ButtonAction;
    onResultClick: ButtonAction;
    onOperationClick: ButtonAction;
};

class ButtonsPad extends Component<ButtonPadProps> {
    private buttons: ButtonType[] = [
        {symbol: "C", cols: 4, action: this.props.onClearClick},
        {symbol: "7", cols: 1, action: this.props.onNumberClick},
        {symbol: "8", cols: 1, action: this.props.onNumberClick},
        {symbol: "9", cols: 1, action: this.props.onNumberClick},
        {symbol: "/", cols: 1, action: this.props.onOperationClick},
        {symbol: "4", cols: 1, action: this.props.onNumberClick},
        {symbol: "5", cols: 1, action: this.props.onNumberClick},
        {symbol: "6", cols: 1, action: this.props.onNumberClick},
        {symbol: "X", cols: 1, action: this.props.onOperationClick},
        {symbol: "1", cols: 1, action: this.props.onNumberClick},
        {symbol: "2", cols: 1, action: this.props.onNumberClick},
        {symbol: "3", cols: 1, action: this.props.onNumberClick},
        {symbol: "-", cols: 1, action: this.props.onOperationClick},
        {symbol: ".", cols: 1, action: this.props.onNumberClick},
        {symbol: "0", cols: 1, action: this.props.onNumberClick},
        {symbol: "=", cols: 1, action: this.props.onResultClick},
        {symbol: "+", cols: 1, action: this.props.onOperationClick},
    ];

    render() {
        return (
            <div className="buttonsWrapper">
                {this.buttons.map((btn) => (
                    <Button
                        key={btn.symbol}
                        symbol={btn.symbol}
                        cols={btn.cols}
                        action={btn.action}
                    />
                ))}
            </div>
        );
    };
}

export default ButtonsPad;