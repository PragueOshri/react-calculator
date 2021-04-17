import React, {Component} from "react";
import "./display-bar.scss";

type DisplayBarProps = {
    currentEquation: string;
    result: number | null;
};

class DisplayBar extends Component<DisplayBarProps> {
    render() {
        return (
            <div>
                <input
                    className="input"
                    type="text"
                    value={this.props.currentEquation}
                    readOnly={true}
                />
                {this.props.result}
            </div>
        );
    }
}

export default DisplayBar;
