import { Component } from "react";
import "./NavLink.scss";

/**
 * NavLink component AmberBuild Docs
 */
class NavLink extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <a className="navlink__docs" {...this.props}>
                {this.props.text}
                {this.props.children}
            </a>
        );
    }
}

export default NavLink;