'use client';

import styled from 'styled-components';
import Hamburger from './Hamburger';
import Socials from '../header/Social';
import {MdCallMade} from 'react-icons/md';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 4.5rem;
  width: 100vw;
  padding-left: 1rem;
  background-color: #555556;

  font-weight: 600;

  .social-hidden {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;

const BottomNavbar = ({heading}) => {
  return (
    <div
      style={{
        backgroundColor: '#555556',
        position: 'fixed',
        width: '100%',
        top: '0',
        borderBottom: '1px solid #000000',
        zIndex: '1000',
      }}>
      <Nav>
        <Hamburger />
        <div className="social-hidden">
          <Socials className="socials-navbar" />

          <div style={{display: 'flex', gap: '1rem'}}>
            <a
              className="btn btn-nav-call"
              href="https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe"
              target="_blank"
              rel="noopener noreferrer">
              Book call <MdCallMade />
            </a>

            <div className="divider2"></div>

            <button
              className="btn btn-nav-message"
              onClick={() => (window.location.href = 'mailto:deulo.dev@gmail.com')}>
              Message <MdCallMade />
            </button>
          </div>
        </div>
      </Nav>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '10rem',
          padding: '4rem 0 1.8rem 0',
        }}>
        <h2 style={{color: '#ffffff'}}>{heading}</h2>
      </div>
    </div>
  );
};

export default BottomNavbar;
