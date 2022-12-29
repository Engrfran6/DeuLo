import "./technologies.css";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";

export default function Technologies() {
  return (
    <section id="experience">
      <div className="container experience_container">
        <div className="frontend">
          <ul className="experience_list">
            <span>
              <ImHtmlFive2 className="experience_icon" />
              <div>
                <li className="experience_listitems">HTML</li>
                <h5 className="text-light">Experienced</h5>
              </div>
            </span>
            <span>
              <FaCss3Alt className="experience_icon" />
              <div>
                <li className="experience_listitems">CSS</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <TbBrandJavascript className="experience_icon" />
              <div>
                <li className="experience_listitems">Javascript</li>
                <h5 className="text-light">Beginner</h5>
              </div>
            </span>
            <span>
              <SiTailwindcss className="experience_icon" />
              <div>
                <li className="experience_listitems">Tailwind</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsBootstrapFill className="experience_icon" />
              <div>
                <li className="experience_listitems">Boostrap</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <GrReactjs className="experience_icon" />
              <div>
                <li className="experience_listitems">ReactJs</li>
                <h5 className="text-light">Biginner</h5>
              </div>
            </span>
          </ul>
        </div>

        {/* <div className="backend">
          <h3>Backend Development</h3>
          <ul className="experience_list">
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">Node Js</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">PHP</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">Python</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">MongoDB</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
            <span>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <li className="experience_listitems">MySQL</li>
                <h5 className="text-light">Intermediate</h5>
              </div>
            </span>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
