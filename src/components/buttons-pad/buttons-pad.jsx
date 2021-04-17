import React, {Component} from "react";
import Button from "../button/button.jsx";
import './buttons-pad.scss';

class ButtonsPad extends Component {
    constructor(props) {
        super(props);
    }

    buttons = [
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
                        action={(symbol) => btn.action(symbol)}
                    />
                ))}
            </div>
        );
    }
}

export default ButtonsPad;
