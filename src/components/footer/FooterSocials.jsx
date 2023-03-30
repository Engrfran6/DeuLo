import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function FooterSocials() {
  return (
    <div className="footer_socials">
      <a href="https://www.linkedin.com/in/deulo/" target="-blank">
        <BsLinkedin />
      </a>
      <a href="https://web.facebook.com/Engrfran6" target="-blank">
        <ImFacebook2 />
      </a>
      <a href="https://twitter.com/francisefe3" target="-blank">
        <AiOutlineGithub />
      </a>
      <a href="https://instagram.com/codewith_deulo" target="-blank">
        <BsTwitter />
      </a>
      <a href="https://github.com/engrfran6" target="-blank">
        <BsInstagram />
      </a>
    </div>
  );
}
