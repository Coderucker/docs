import Header from "../components/Header/index";
import Nav from "../components/Nav";
import NavLink from "../components/NavLink/index";
import logo from "../assets/logo/amber-build-icon.png";

/**
 * Nav Bar UI Implemented Component
 */
const _Nav = () => {
    return (
    <Nav style={{
        position: "fixed",
        top: 0
      }} animate="true">
        <div style={{
          display: "flex",
          width: "20%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-around"
        }}>
          <img 
            height={50} 
            src={logo} 
            alt="Logo for App" />
          <Header text="AmberBuild"/>
        </div>
        <div style={{
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