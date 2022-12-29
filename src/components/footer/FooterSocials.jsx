import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function FooterSocials() {
  return (
    <div className="footer_socials">
      <a href="https://linkedin.com" target="-blank">
        <BsLinkedin />
      </a>
      <a href="https://facebook.com" target="-blank">
        <ImFacebook2 />
      </a>
      <a href="https://twitter.com" target="-blank">
        <AiOutlineGithub />
      </a>
      <a href="https://instagram.com" target="-blank">
        <BsTwitter />
      </a>
      <a href="https://github.com" target="-blank">
        <BsInstagram />
      </a>
    </div>
  );
}
