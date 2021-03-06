import { Component } from "react";
import "./NavLink.scss";

/**
 * NavLink component bitbuild Docs
 */
class NavLink extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <a className={`navlink__docs ${this.props.issec ? "sec" : "primary"}`} {...this.props}>
                {this.props.text}
                {this.props.children}
            </a>
        );
    }
}

export default NavLink;