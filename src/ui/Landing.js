import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

const Landing = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 150,
            width: "50%",
            paddingLeft: 40
        }}>
            <Header className="header__docs no-margin" style={{
                fontSize: 50,
                fontWeight: 900
            }}>
                Tired of Building and Executing Your Code
            </Header>   
            <Paragraph style={{
                color: "#a3a3a3"
            }}>
                AmberBuild Automatically detects File Changes in your code<br/> and
                build according to the task you specified.
            </Paragraph>
            <div>
                <Button>
                    Read the Docs
                </Button>
            </div>
        </div>
    );
}

export default Landing;