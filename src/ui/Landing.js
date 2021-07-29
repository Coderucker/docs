import Button from "../components/Button";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ColorfulText from "../components/ColorfulText";

const LanderMain = styled.main`
    max-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 150px 40px;

    @media screen and (max-width: 600px) {
        max-width: 76vw;
        padding-top: 120px;
    }   
`;

const StarterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 250px;
  @media screen and (max-width: 600px) {
      width: 100vw;
      display: grid;
      grid-template-rows: 65px 65px;
      grid-template-columns: calc(100vw - 100px);
      place-items: center;
  }
`;

const Landing = () => {
  return (
    <LanderMain>
      <Header
        className="header__docs no-margin main-header">
        Tired of <ColorfulText>Building</ColorfulText> and Executing Your Code
      </Header>
      <Paragraph
        style={{
          color: "#959595",
          fontSize: "75%",
          fontWeight: 400,
          width: "46vw",
          marginLeft: 4,
          textShadow: "2px 8px 8px rgba(0, 0, 0, 0.09)",
        }}
      >
        bitbuild will automate your Build Tasks for you. No matter what the
        languages and framerwork are! It works cross-lang and runs across all
        platforms. Just run <code>bitbuild</code> the build will be automated
        every-time you make a change in your code.
      </Paragraph>
      <StarterDiv>
        <Button issec="true">&gt; Get Started</Button>
        <Link to="/docs">
          <Button
            style={{
              fontWeight: 600,
              boxShadow: "2px 5px 15px 0 #F758FA60",
            }}
          >
            📃 Read the Docs
          </Button>
        </Link>
      </StarterDiv>
    </LanderMain>
  );
};

export default Landing;
