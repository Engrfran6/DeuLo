import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Nav = styled.nav`
  height: 3.5rem;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: rgb(44, 96, 114);
  fontfamily: "Alegreya Sans", sans-serif;

  .logo {
    padding: 15px 0;
    font-size: 1.7rem;
    font-weight: 600;
    cursor: pointer;
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
