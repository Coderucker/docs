import React from "react";
import styled from "styled-components";

const ColorfulTextStyle = styled.span`
    background-image: linear-gradient(45deg, #F758FA, #72c, #456);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

class ColorfulText extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <ColorfulTextStyle>
                {this.props.children}
            </ColorfulTextStyle>
        );
    }
}

export default ColorfulText;
