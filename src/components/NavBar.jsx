import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const Header = styled.div`
    align-items: center;
    position: fixed;
    top: 1.5rem;
    right: 0.4rem;
    left: 1rem;
    z-index: 9999;

    nav {
      border-bottom: 0.1px solid rgb(44, 96, 114);
      border-radius: 1rem;
    }
  `;

  const HamburgerStyles = styled.div`
    .bar {
      display: block;
      width: 1.7rem;
      height: 0.2rem;
      margin: 0.25rem auto;
      border-radius: 30px;
      transition: var(--transition);
      background-color: black;
    }

    .hamburger {
      position: absolute;
      top: 0.1rem;
      right: 1.5rem;
      display: none;
      cursor: pointer;
    }

    @media screen and (max-width: 600px) {
      .navbar {
        flex-flow: column nowrap;
        position: absolute;
        right: 0;
        top: 3rem;
        align-items: flex-end;
        display: none;
        background: rgb(251, 250, 250);
        height: max-content;
        width: 10rem;
        font-size: 1.5rem;
      }

      .hamburger {
        display: block;
      }
      //tranformation
      .bar:nth-child(2) {
        background: red;
      }

      .bar:nth-child(1) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      }

      // .bar:nth-child(2) {
      //   opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      // }

      .bar:nth-child(3) {
        transform: ${({ isOpen }) =>
          isOpen ? "translateY(-45deg)" : "translateX(0)"};
      }
    }
  `;
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <Header
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
      <HamburgerStyles>
        {!isOpen && (
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
        )}

        <div onClick={toggleMenu} className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </HamburgerStyles>
    </Header>
  );
}
export default NavBar;
