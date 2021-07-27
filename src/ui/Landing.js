import Button from "../components/Button";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";

// UI STYLES
import '../styles/Landing.scss';

const Landing = () => {
    return (
        <main className="landing__main_hero" style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 150,
            width: "45%",
            paddingLeft: 40,
            flex: 1
        }}>
            <Header className="header__docs no-margin main-header" style={{
                fontSize: "calc(54px - 1vmin)",
                fontWeight: 800,
                color: "#2C2C2C",
                flex: "none",
                order: 0,
                flexGrow: 0,
                textShadow: "2px 8px 8px rgba(0, 0, 0, 0.06);"
            }}>
                Tired of Building and Executing Your Code
            </Header>   
            <Paragraph style={{
                color: "#959595",
                fontSize: "75%",
                fontWeight: 400,
                width: "calc(579px - 35vmin)",
                marginLeft: 4,
                textShadow: "2px 8px 8px rgba(0, 0, 0, 0.09)"
            }}>
                AmberBuild will automatically build and execute your code. No matter what the languages and framerwork are!
                This make’s you up-to-date about your code result.
            </Paragraph>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "250px"
            }}>
                <Link to="/docs">
                    <Button style={{
                        fontWeight: 600,
                        boxShadow: "2px 5px 15px 0 #F758FA60"
                    }}>
                        Read the Docs
                    </Button>
                </Link>
                <Button issec="true">
                    &gt; Try now
                </Button>
            </div>
        </main>
    );
}

export default Landing;