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
            width: "45%",
            paddingLeft: 40
        }}>
            <Header className="header__docs no-margin" style={{
                fontSize: "200%",
                fontWeight: 900,
                textShadow: "2px 10px 35px #c4c4c4aa"
            }}>
                Tired of Building and Executing Your Code
            </Header>   
            <Paragraph style={{
                color: "#555",
                fontSize: "75%"
            }}>
                AmberBuild Automatically detects File Changes in your code and
                build according to the task you specified.
            </Paragraph>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "250px"
            }}>
                <Button style={{
                    fontWeight: 600,
                    boxShadow: "2px 5px 15px 0 #166edc60"
                }}>
                    Read the Docs
                </Button>
                <Button isSec={true}>
                    Try now
                </Button>
            </div>
        </div>
    );
}

export default Landing;