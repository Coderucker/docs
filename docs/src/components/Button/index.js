import { Component } from "react";
import './Button.css';

/**
 * Button Component for AmberBuild Docs
 */
class Button extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <button className="btn__docs" {...this.props}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;