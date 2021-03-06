import { Component } from "react";
import './Button.scss';

/**
 * Button Component for bitbuild Docs
 */
class Button extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <button className={`btn__docs ${this.props.issec ? "sec" : "primary"}`} {...this.props}>
                {this.props.text}
                {this.props.children}
            </button>
        );
    }
}

export default Button;