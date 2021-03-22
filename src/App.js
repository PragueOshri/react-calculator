import React, { Component } from "react";
import Button from "./components/button/button";
import Calculator from "./components/calculator/calculator";
import "./css/style.css";

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Calculator />
        {/* <div className="wrapper">
          <div className="displayContainer">
            <input
              className="input"
              type="text"
              value={this.state.currentEquation}
            />
            <p className="result" type="text">
              {this.state.result}
            </p>
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
        </div> */}
      </div>
    );
  }
}

export default App;
