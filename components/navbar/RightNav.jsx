import styled from 'styled-components';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Ul = styled.ul`
  display: flex;

  & a {
    margin: 20px 40px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #bebbbb;
    }
  }

  .active {
    border-bottom: 2px solid #ffffff;
  }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    background-color: #555556;
    position: fixed;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.7;
  }
`;

const RightNav = ({open}) => {
  const pathname = usePathname();
  return (
    <Ul open={open}>
      <Link className={`${pathname === '/' ? 'active' : ''}`.trim()} href="/">
        Home
      </Link>
      <Link className={`${pathname === '/about' ? 'active' : ''}`.trim()} href="/about">
        About
      </Link>
      <Link className={`${pathname === '/portfolio' ? 'active' : ''}`.trim()} href="/portfolio">
        Portfolio
      </Link>
      <Link className={`${pathname === '/contact' ? 'active' : ''}`} href="/contact">
        Contact
      </Link>
    </Ul>
  );
};

export default RightNav;
