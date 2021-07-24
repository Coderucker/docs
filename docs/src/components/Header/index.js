import { Component } from "react";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <header className="header__docs">
                {this.props.text}
            </header>
        );
    }
}

export default Header;