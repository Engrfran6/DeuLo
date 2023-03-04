import "./footer.css";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer>
      <div className="footer_author">
        <a href="#home" className="deulo_logo" rel="noreferrer">
          DeuLo
        </a>
        <ul className="footer_list_links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="footer_social-links">
        <FooterSocials />
        <p>Copyright &copy; Francis U. Okpoluaefe. 2022, All rights reserved</p>
      </div>
    </footer>
  );
}
