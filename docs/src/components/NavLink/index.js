import { Component } from "react";
import "./NavLink.css";

class NavLink extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <a className="navlink__docs">
                {this.props.text}
                {this.props.children}
            </a>
        );
    }
}

export default NavLink;