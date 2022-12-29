import Aboutsocials from "./Aboutsocial";
import Technologies from "../technologies/Technologies";
import ME from "../image/Francis.jpeg";
import "./header.css";

function Header() {
  return (
    <section>
      <div className="container container-content">
        <div className="header-me">
          <small>Francis U. Okpoluaefe</small>
          <h2 className="my-job">Frontend Developer</h2>
          <p className="header-text">
            Passionate about usability and possess intermediate knowledge of
            Adobe Photoshop
          </p>

          <div style={{ display: "flex" }}>
            <div>
              <Aboutsocials />
            </div>
            <div
              style={{
                margin: "0.6rem 0 0 1rem",
              }}
            >
              <button>
                <a
                  className="resume"
                  href="https://drive.google.com/file/d/14sJQ8ms2OlcVHKZt4BxkPPSDnj1lbktx/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="profile-content">
          <img src={ME} alt="" className="image" />
        </div>
      </div>
      <Technologies />
    </section>
  );
}
export default Header;
