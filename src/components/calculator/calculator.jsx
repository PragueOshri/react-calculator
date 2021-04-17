import React, {Component} from "react";
import ButtonsPad from "../buttons-pad/buttons-pad.jsx";
import "./calculator.scss";

class Calculator extends Component {
    render() {
        return (
            <div className="calculatorWrapper">
                <div className="displayBarWrapper">{
                    <ButtonsPad />
                }</div>
            </div>
        );
    }
}

export default Calculator;
