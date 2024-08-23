import Socials from '../header/Social';
import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer_container">
      <div className="footer_list">
        <a href="/home" className="footer_logo" rel="noreferrer">
          DeuLo
        </a>
        <ul className="footer_listitems">
          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>

      <div className="footer_social-links">
        <Socials className="socials-footer" />

        <p id="year">Copyright &copy; Francis U. Okpoluaefe. {currentYear}, All rights reserved</p>
      </div>
    </section>
  );
}
