import { NavLink } from "react-router-dom";
// import CV from "./assets/francis.pdf";

function NavBar() {
  return (
    <div
      className="container navbar-content"
      style={{
        display: "flex",
        alignItems: "center",
        background: "transparent",
        padding: "5px 0 5px 5px",
        fontSize: "10px",
      }}
    >
      <div
        style={{
          flex: "6",
          fontSize: "1.3rem",
          color: "rgb(44, 96, 114)",
          fontFamily: "'Alegreya Sans', sans-serif",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        DEULO
      </div>
      <nav
        className="navbar"
        style={{
          display: "flex",
          flex: "6",
          justifyContent: "end",
          margin: "0",
        }}
      >
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "rgb(44, 96, 114)" : "black",
            })}
          >
            ABOUT
          </NavLink>
        </div>

        <div style={{ margin: "10px" }}>
          <NavLink
            to="/technologies"
            style={({ isActive }) => ({
              color: isActive ? "rgb(44, 96, 114)" : "black",
            })}
          >
            PROJECTS
          </NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "rgb(44, 96, 114)" : "black",
            })}
          >
            CONTACT
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
