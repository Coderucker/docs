import Header from "../components/Header";
import styled, { keyframes } from "styled-components";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

const ErrorAnimation = keyframes`
    from {
        filter: blur(100px);
    }
    
    to {
        filter: blur(0px);
    }
`;

const Page = styled.main`
    max-height: 100vh;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${ErrorAnimation} .7s ease-in-out;
`;

const NotFound = () => {
  return (
      <Page>
          <Header
            style={{
              fontSize: 100,
              textShadow: "2px 8px 8px rgba(0, 0, 0, 0.19)"
            }}
            text="404"
          />
          <Paragraph>
              Page not found :( !
          </Paragraph>
          <Button issec="true" onClick={() => window.location = "/"}>
              Back To Home Page
          </Button>
      </Page>
  );
};

export default NotFound;
