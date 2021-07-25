import { useState } from "react";
import Header from "../components/Header/index";
import Nav from "../components/Nav";
import NavLink from "../components/NavLink/index";
import logo from "../assets/logo/amber-build-icon.png";

// STYLES
import '../styles/_Nav.css';

/**
 * Nav Bar UI Implemented Component
 */
const _Nav = () => {
    const [scroll, setScroll] = useState(false);

    window.onscroll = (e) => {
      if (window.pageYOffset >= 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      console.log(window.pageYOffset);
    };

    return (
    <Nav style={{
        position: "fixed",
        top: 0,
        background: scroll ? "rgba(255, 255, 255, 0.7)" : "#fff"
      }} animate="true">
        <div style={{
          display: "flex",
          width: "15%",
          height: "100%",
          alignItems: "center"
        }}>
          <img 
            height={40} 
            src={logo} 
            alt="Logo for App"
            style={{
              margin: "0 10px",
              marginBottom: "5px"
            }} />
          <Header text="AmberBuild"/>
        </div>
        <div className="supportive-links__docs" style={{
          display: "flex",
          width: "30%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-around"
        }}>
          <NavLink
           style={{
             color: "#717171",
             fontSize: 14,
             padding: 8
           }}
           text="Documentation"/>
          <NavLink
           style={{
             color: "#717171",
             fontSize: 14,
             padding: 8
           }}
           text="Support"/>
          <NavLink
           style={{
             color: "#717171",
             fontSize: 14,
             padding: 8
           }}
           text="About"/>
        </div>
      </Nav>
    );
}

export default _Nav;