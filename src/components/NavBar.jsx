import { NavLink } from "react-router-dom";
// import CV from "./assets/francis.pdf";

function NavBar() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        // justifyContent: "end",
        alignItems: "center",
        background: "transparent",
        padding: "5px 0 5px 5px",
        fontSize: "15px",
        fontWeight: "600",
      }}
    >
      <div
        style={{
          flex: "6",
          fontSize: "2rem",
          color: "rgb(44, 96, 114)",
          fontFamily: "'Alegreya Sans', sans-serif",
        }}
      >
        DEULO
      </div>
      <div style={{ display: "flex", flex: "6", justifyContent: "end" }}>
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
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "rgb(44, 96, 114)" : "black",
            })}
          >
            TECH
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
      </div>
    </div>
  );
}
export default NavBar;
