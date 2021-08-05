import Header from "../components/Header/index";
import Nav from "../components/Nav";
import NavLink from "../components/NavLink/index";
import logo from "../assets/logo/bit-build-icon.svg";

// STYLES
import "../styles/_Nav.scss";

/**
 * Nav Bar UI Implemented Component
 */
const _Nav = () => {
  return (
    <Nav
      style={{
        position: "fixed",
        top: 0,
      }}
    >
      <div className="nav__product-container">
        <img
          height={40}
          src={logo}
          alt="Logo for App"
          style={{
            margin: "0 10px",
            marginBottom: "5px",
          }}
        />
        <Header fontSize="100%" text="bitbuild" />
      </div>
      <div className="supportive-links__docs">
        <NavLink issec="true" text="Documentation" />
        <NavLink issec="true" text="Support" />
        <NavLink issec="true" text="Playground" />
      </div>
    </Nav>
  );
};

export default _Nav;
