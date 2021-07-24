import logo from "./assets/logo/amber-build-icon.png";
import "./App.css";

// COMPONENTS
import Button from "./components/Button/index";
import Header from "./components/Header/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img height={100} src={logo} alt="Logo for App" />
        </nav>
        <Header>Documentation For AmberBuild</Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "inherit",
          }}
        >
          <Button text="Read the Docs" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try AmberBuild
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
