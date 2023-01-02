import "./about.css";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { DiSass } from "react-icons/di";

export default function About() {
  return (
    <section id="#about" className="about-container">
      <h5>get to know</h5>
      <h2 className="head-text">
        About Me<span></span>
      </h2>
      <div className="container bio">
        <p>
          Self-taught innovative Frontend developer living in Port-Harcourt,
          Nigeria, specializing in web development and open source.
        </p>

        <p className="about-text">
          i love building scalable and responsive websites, Proficient in HTML,
          CSS, JavaScript, React, J Query, Reactrap plus modern libraries and
          frameworks. I am currently working on improving my JavaScript skills
          by building various projects to enhance my knowledge.
        </p>

        {/* <p>
          I am highly proficient in CSS, SASS but have built some other
          <a href="">projects</a> with
          JavaScript and jQuery. I am currently working on improving my
          JavaScript skills by building various projects to enhance my
          abilities.
        </p> */}

        {/* <p>
          In my spare time, I love contributing to open source projects for
          different communities like
          <a href="" target="_blank">
            eddiehub
          </a>
          ,
          <a href="" target="_blank">
            CommunityPro
          </a>
          , and
          <a href="" target="_blank">
            ChryzHub
          </a>
          etc.
        </p> */}

        <p>
          Technologies and tools I'm currently exploring and interested about.
        </p>

        <ul class="language">
          <li>
            <ImHtmlFive2 className="experience_icon" />
            HTML5
          </li>
          <li>
            <FaCss3Alt className="experience_icon" />
            CSS3
          </li>
          <li>
            <TbBrandJavascript className="experience_icon" />
            JavaScript
          </li>
          <li>
            <GrReactjs className="experience_icon" />
            React
          </li>

          <li>
            <SiTailwindcss className="experience_icon" />
            TailwindCSS
          </li>

          <li>
            <DiSass className="experience_icon" />
            SASS
          </li>

          <li>
            <BsBootstrap className="experience_icon" />
            Boostrap
          </li>
        </ul>

        <ul class="language">
          <li>Open source</li>
          <li>Blogging & Technical Writing</li>
        </ul>
      </div>
    </section>
  );
}
