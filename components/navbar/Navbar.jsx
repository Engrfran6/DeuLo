'use client';

import styled from 'styled-components';
import Hamburger from './Hamburger';
import Socials from '../header/Social';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 100%;
  padding-left: 1rem;
  background-color: #555556;
  border-bottom: 1px solid #000000;
  font-weight: 600;
  z-index: 1000;
  position: fixed;
  top: 0;

  .social-hidden {
    display: none;
  }

  @media screen and (max-width: 600px) {
    justify-content: space-between;

    .social-hidden {
      display: block;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="social-hidden">
        <Socials className="socials-navbar" />
      </div>

      <Hamburger />
    </Nav>
  );
};

export default Navbar;
