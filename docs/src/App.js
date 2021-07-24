import logo from "./assets/logo/amber-build-icon.png";
import "./App.css";

// COMPONENTS
import Button from "./components/Button/index";
import Header from "./components/Header/index";
import NavLink from "./components/NavLink/index";
import Nav from "./components/Nav/index";

function App() {
  return (
    <div className="App">
        <Nav style={{
          position: "fixed",
          top: 0,
          padding: 10
        }}>
          <img height={50} src={logo} alt="Logo for App" />
          <Header text="AmberBuild"/>
        </Nav>
        <Header>
          Automatically Build and Execute your Tasks
        </Header>
        <div
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
        </div>
    </div>
  );
}

export default App;
