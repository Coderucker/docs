import React from "react";
import styled from "styled-components";

const _ColorfulText = styled.span`
    background: linear-gradient(45deg, #F758FA, #72c, #456);
    color: #fff;
`;

class ColorfulText extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <_ColorfulText>
                {this.props.children}
            </_ColorfulText>
        );
    }
}

export default ColorfulText;