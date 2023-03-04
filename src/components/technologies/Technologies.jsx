import "./technologies.css";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";

import { TbBrandJavascript } from "react-icons/tb";

export default function Technologies() {
  return (
    <section id="experience">
      <div className="container experience_container">
        <div className="experience_container-list">
          <span>
            <ImHtmlFive2 className="experience_icon" />
          </span>
          <div>
            <li className="experience_listitems">HTML</li>
            <h5 className="text-s">Experienced</h5>
          </div>
        </div>

        <div className="experience_container-list">
          <span>
            <FaCss3Alt className="experience_icon" />
          </span>

          <div>
            <li className="experience_listitems">CSS</li>
            <h5 className="text-s">Intermediate</h5>
          </div>
        </div>
        <div className="experience_container-list">
          <span>
            <TbBrandJavascript className="experience_icon" />
          </span>
          <div>
            <li className="experience_listitems">Javascript</li>
            <h5 className="text-s">Beginner</h5>
          </div>
        </div>

        <div className="experience_container-list">
          <span>
            <GrReactjs className="experience_icon" />
          </span>
          <div>
            <li className="experience_listitems">ReactJs</li>
            <h5 className="text-s">Biginner</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
