import React, {Component} from "react";
import ButtonsPad from "../buttons-pad/buttons-pad.jsx";
import DisplayBar from "../display-bar/display-bar";
import "./calculator.scss";

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            currentEquation: "",
            currentNum: null,
            operations: [],
            opPos: 0,
            tempResult: null,
            result: null,
        };

        this.state = { ...this.initialState };
    }

    reset = () => {
        this.setState({ ...this.initialState });
    };

    concatNumToCur = (symbol) => {
        this.setState({
            currentNum: this.state.currentNum
                ? this.state.currentNum + symbol
                : symbol,
            currentEquation: this.state.currentEquation
                ? this.state.currentEquation + symbol
                : symbol,
        });
    };
    //x
    concatOpToCur = (symbol) => {
        // [] ==> ['x']
        this.setState({
            currentEquation: this.state.currentEquation + symbol,
            operations: [...this.state.operations, symbol],
        });
        console.log("my ops: ", this.state.operations);
        console.log("array op size is = ", this.state.operations.length);
        if (this.state.tempResult === null || this.state.tempResult === undefined) {
            this.setState({ tempResult: this.state.currentNum, currentNum: null });
        } else {
            const tempNum = this.calculate(
                this.state.tempResult,
                this.state.operations[this.state.opPos],
                this.state.currentNum
            );
            this.setState({
                tempResult: tempNum,
                opPos: this.state.opPos + 1,
                currentNum: null,
            });
        }
    };

    printResult = () => {
        if (this.state.tempResult !== null || this.state.tempResult !== undefined) {
            const res = this.calculate(
                this.state.tempResult,
                this.state.operations[this.state.opPos],
                this.state.currentNum
            );
            console.log("tempResult = ", this.state.tempResult);
            console.log("currentNum = ", this.state.currentNum);
            console.log("result = ", res);
            this.setState({ result: res });
        } else {
            this.setState({ result: this.state.currentNum });
        }
    };

    calculate = (num1, operation, num2) => {
        const firstNumber = Number(num1);
        const secondNumber = Number(num2);
        switch (operation) {
            case "X":
                return firstNumber * secondNumber;
            case "/":
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
                <div className="displayBarWrapper">{
                    <>
                        <DisplayBar
                            currentEquation={this.state.currentEquation}
                            result={this.state.result}
                        />
                        <ButtonsPad
                            onClearClick={this.reset}
                            onNumberClick={this.concatNumToCur}
                            onOperationClick={this.concatOpToCur}
                            onResultClick={this.printResult}
                        />
                    </>
                }</div>
            </div>
        );
    }
}

export default Calculator;
