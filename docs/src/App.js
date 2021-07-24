import { useState } from "react";
import logo from "./assets/logo/amber-build-icon.png";
import "./App.css";

// UI
import NavBarUI from "./ui/_Nav";
import Landing from "./ui/Landing";

// COMPONENTS
import Nav from "./components/Nav/index";
import Header from "./components/Header/index";
import Paragraph from "./components/Paragraph/index";
import Button from "./components/Button/index";
import NavLink from "./components/NavLink/index";

// UTILS
import copyToClipBoard from "./util/copyToClipBoard";

function App() {
  return (
    <div className="App">
        <NavBarUI />
        <Landing />
    </div>
  );
}

export default App;
