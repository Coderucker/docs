import { Component } from "react";
import "./Nav.css";

/**
 * NavBar component for AmberBuild Docs
 */
class Nav extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <nav className="navbar__docs" {...this.props}>
                {this.props.children}
            </nav>
        );
    }
}

export default Nav;