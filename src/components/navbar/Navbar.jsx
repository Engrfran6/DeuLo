import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Nav = styled.nav`
  height: 3.5rem;
  border-bottom: 3px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  font-family: "Alegreya Sans", sans-serif;
  color: #4670a0;
  font-weight: 700;
  z-index: 1000;
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;

  .logo {
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 6rem;
  }

  @media screen and (max-width: 600px) {
    top: 0.5rem;
  }
`;

const Navbar = () => {
  return (
    <Nav id="#home" className="container">
      <div className="logo">
        <a href="#home">DeuLo</a>
      </div>

      <Hamburger />
    </Nav>
  );
};

export default Navbar;

