import { Component } from "react";
import './Header.scss';

/**
 * Header Component for AmberBuild Docs
 */
class Header extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <header className="header__docs" {...this.props}>
                {this.props.text}
                {this.props.children}
            </header>
        );
    }
}

export default Header;