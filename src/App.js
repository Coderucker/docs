import { useState } from "react";
import logo from "./assets/logo/amber-build-icon.png";
import "./App.css";

// UI
import NavBarUI from "./ui/_Nav";
import Landing from "./ui/Landing";

function App() {
  return (
    <div className="App">
        <NavBarUI />
        <Landing />
    </div>
  );
}

export default App;
