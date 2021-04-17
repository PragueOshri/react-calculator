import React, {Component} from "react";
import "./display-bar.scss";

type DisplayBarProps = {
    currentEquation: string;
    result: number | null;
};

class DisplayBar extends Component<DisplayBarProps> {
    render() {
        return (
            <div className="displayContentWrapper">
                <span className="equation">{this.props.currentEquation}</span>
                <span className="result">{this.props.result}</span>
            </div>
        );
    }
}

export default DisplayBar;
