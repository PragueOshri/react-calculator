import React, {Component} from "react";
import ButtonsPad from "../buttons-pad/buttons-pad";
import DisplayBar from "../display-bar/display-bar";
import {ButtonSymbol, Operation} from "../../types";
import "./calculator.scss";
import ClearButton from "../clear-button/clear-button";

type CalculatorState = {
    currentEquation: string;
    currentNum: string;
    operations: Operation[];
    opPos: number;
    tempResult: string;
    result: number | null;
};

class Calculator extends Component<{}, CalculatorState> {
    constructor(props: {}) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        currentEquation: "",
        currentNum: "",
        tempResult: "",
        operations: [],
        opPos: 0,
        result: null,
    });

    reset = () => {
        this.setState(this.getInitialState());
    };

    concatNumToCur = (symbol: string): void => {
        this.setState({
            currentNum: this.state.currentNum
                ? this.state.currentNum + symbol
                : symbol,
            currentEquation: this.state.currentEquation
                ? this.state.currentEquation + symbol
                : symbol,
        });
    };

    concatOpToCur = (symbol: ButtonSymbol): void => {
        this.setState({
            currentEquation: this.state.currentEquation + symbol,
            operations: [...this.state.operations, symbol as Operation],
        });
        if (this.state.tempResult === "") {
            this.setState({tempResult: this.state.currentNum, currentNum: ""});
        } else {
            const tempNum = this.calculate(
                this.state.tempResult,
                this.state.operations[this.state.opPos],
                this.state.currentNum
            );
            this.setState({
                tempResult: String(tempNum),
                opPos: this.state.opPos + 1,
                currentNum: "",
            });
        }
    };

    printResult = () => {
        if (this.state.tempResult !== null) {
            const res = this.calculate(
                this.state.tempResult,
                this.state.operations[this.state.opPos],
                this.state.currentNum
            );
            this.setState({result: res});
        } else {
            this.setState({result: Number(this.state.currentNum)});
        }
    };

    calculate = (num1: string, operation: Operation, num2: string): number => {
        const firstNumber = Number(num1);
        const secondNumber = Number(num2);
        switch (operation) {
            case 'x':
                return firstNumber * secondNumber;
            case "÷":
                return firstNumber / secondNumber;
            case "+":
                return firstNumber + secondNumber;
            case "-":
                return firstNumber - secondNumber;
        }
    };


    render() {
        return (
            <div className="calculatorWrapper">
                <div className="displayBarWrapper">
                    <DisplayBar
                        currentEquation={this.state.currentEquation}
                        result={this.state.result}
                    />
                    <div className="clearButtonWrapper">
                        <ClearButton onClick={this.reset} />
                    </div>
                </div>
                <ButtonsPad
                    onNumberClick={this.concatNumToCur}
                    onOperationClick={this.concatOpToCur}
                    onResultClick={this.printResult}
                />
            </div>
        );
    }
}

export default Calculator;
