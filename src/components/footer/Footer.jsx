import "./footer.css";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer>
      <a href="" className="deulo_logo">
        DEULO
      </a>

      <ul className="footer_list_links">
        <li>
          <a href="#">About</a>
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

      <FooterSocials />

      <div className="footer_author">
        <small>&copy; Deulo portfolio page</small>
      </div>
    </footer>
  );
}
