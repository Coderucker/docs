import logo from "./assets/logo/amber-build-icon.png";
import "./App.css";

// COMPONENTS
import Nav from "./components/Nav/index";
import Header from "./components/Header/index";
import Paragraph from "./components/Paragraph/index";
import Button from "./components/Button/index";
import NavLink from "./components/NavLink/index";

function App() {
  return (
    <div className="App">
        <Nav style={{
          position: "fixed",
          top: 0,
          padding: 10
        }} animate={true}>
          <img height={50} src={logo} alt="Logo for App" />
          <Header text="AmberBuild"/>
        </Nav>
        <div style={{
          paddingTop: 100
        }}>
        <Header>
          Automatically Build and Execute your Tasks
        </Header>
        <div style={{
          height: "200vh",
          width: "100%",
          background: "linear-gradient(5deg, #166edc, #10abaf, #c4c489)"
        }}/>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "inherit",
          }}
        >
          <Button text="Read the Docs" />
          <NavLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </NavLink>
        </div> */}
    </div>
  );
}

export default App;
