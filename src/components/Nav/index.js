import { Component } from "react";
import "./Nav.scss";

/**
 * NavBar component for bitbuild Docs
 */
class Nav extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <nav className={`navbar__docs ${this.props.animate ? "with-anim" : "no-anim"}`} {...this.props}>
                {this.props.children}
            </nav>
        );
    }
}

export default Nav;