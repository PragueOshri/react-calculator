import React, { Component } from "react";
import Button from "../button/button.jsx";
import DisplayBar from "../display-bar/display-bar";

class ButtonsPad extends Component {
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
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,600&display=swap"
      rel="stylesheet"
    ></link>;

    const buttons = [
      { symbol: "C", cols: 4, action: this.reset },

      { symbol: "7", cols: 1, action: this.concatNumToCur },
      { symbol: "8", cols: 1, action: this.concatNumToCur },
      { symbol: "9", cols: 1, action: this.concatNumToCur },
      { symbol: "/", cols: 1, action: this.concatOpToCur },
      { symbol: "4", cols: 1, action: this.concatNumToCur },
      { symbol: "5", cols: 1, action: this.concatNumToCur },
      { symbol: "6", cols: 1, action: this.concatNumToCur },
      { symbol: "X", cols: 1, action: this.concatOpToCur },
      { symbol: "1", cols: 1, action: this.concatNumToCur },
      { symbol: "2", cols: 1, action: this.concatNumToCur },
      { symbol: "3", cols: 1, action: this.concatNumToCur },
      { symbol: "-", cols: 1, action: this.concatOpToCur },
      { symbol: ".", cols: 1, action: this.concatNumToCur },
      { symbol: "0", cols: 1, action: this.concatNumToCur },
      { symbol: "=", cols: 1, action: this.printResult },
      { symbol: "+", cols: 1, action: this.concatOpToCur },
    ];

    return (
      <div>
        Buttons-Pad
        <div className="displayBarWrapper">
          <DisplayBar
            currentEquation={this.state.currentEquation}
            result={this.state.result}
          />
        </div>
        <div className="buttonsWrapper">
          {buttons.map((btn) => (
            <Button
              key={btn.symbol}
              symbol={btn.symbol}
              cols={btn.cols}
              action={(symbol) => btn.action(symbol)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ButtonsPad;
