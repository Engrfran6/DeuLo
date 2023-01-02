import "./technologies.css";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";

import { TbBrandJavascript } from "react-icons/tb";

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
              <GrReactjs className="experience_icon" />
              <div>
                <li className="experience_listitems">ReactJs</li>
                <h5 className="text-light">Biginner</h5>
              </div>
            </span>
          </ul>
        </div>
      </div>
    </section>
  );
}
