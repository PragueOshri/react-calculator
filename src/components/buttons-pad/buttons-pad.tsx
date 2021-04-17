import React, {Component} from "react";
import Button from "../button/button";
import {ButtonAction, ButtonObject, ButtonType} from "../../types";
import './buttons-pad.scss';

type ButtonPadProps = {
    onNumberClick: ButtonAction;
    onResultClick: ButtonAction;
    onOperatorClick: ButtonAction;
};

class ButtonsPad extends Component<ButtonPadProps> {
    buttons: Pick<ButtonObject, 'symbol' | 'type'>[] = [
        {symbol: "7", type: 'number'},
        {symbol: "8", type: 'number'},
        {symbol: "9", type: 'number'},
        {symbol: "+", type: 'operator'},

        {symbol: "4", type: 'number'},
        {symbol: "5", type: 'number'},
        {symbol: "6", type: 'number'},
        {symbol: "-", type: 'operator'},

        {symbol: "1", type: 'number'},
        {symbol: "2", type: 'number'},
        {symbol: "3", type: 'number'},
        {symbol: "x", type: 'operator'},

        {symbol: ".", type: 'number'},
        {symbol: "0", type: 'number'},
        {symbol: "=", type: 'result'},
        {symbol: "÷", type: 'operator'}
    ];

    getButtonAction = (type: ButtonType): ButtonAction => {
        switch (type) {
            case 'number':
                return this.props.onNumberClick;
            case 'operator':
                return this.props.onOperatorClick;
            case 'result':
                return this.props.onResultClick;
            default:
                return () => {};
        }
    };

    render() {
        return (
            <div className="buttonsWrapper">
                {this.buttons.map((button) => (
                    <Button
                        key={button.symbol}
                        symbol={button.symbol}
                        type={button.type}
                        action={this.getButtonAction(button.type)}
                    />
                ))}
            </div>
        );
    };
}

export default ButtonsPad;