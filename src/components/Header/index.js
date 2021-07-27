import { Component } from "react";
import styled from "styled-components";

const _Header = styled.header`
    color: rgb(36, 36, 36);
    font-size: ${p => p.fontSize ? p.fontSize: "calc(54px - 1vmin)"};
    font-weight: 800;
    text-shadow: 2px 8px 0px 0 #000;
    border: none;
    outline: none;
    transition: 0.15s;
    ${props => props.mediaQ}
`;

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
            <_Header {...this.props}>
                {this.props.text}
                {this.props.children}
            </_Header>
        );
    }
}

export default Header;