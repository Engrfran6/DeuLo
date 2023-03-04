import Aboutsocials from "./Aboutsocial";
import Technologies from "../technologies/Technologies";
import ME from "../image/Francis.jpeg";
import "./header.css";

function Header() {
  return (
    <section className="header">
      {/* <div style={{ position: "relative", left: "0", right: "0" }}>
        This site is currently been upgraded!
      </div> */}

      <div className="container container-content">
        <div className="header-me">
          <small>Francis U. Okpoluaefe</small>
          <h2>Frontend Developer</h2>
          <p>Passionate about usability, Scallabity and Responsivennes.</p>

          <div style={{ display: "flex" }} className="social">
            <div>
              <Aboutsocials />
            </div>
            <div
              className="Btn"
              style={{
                margin: "0.6rem 0 0 1rem",
              }}
            >
              <button
                className="resume"
                href="https://drive.google.com/file/d/14sJQ8ms2OlcVHKZt4BxkPPSDnj1lbktx/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </button>
            </div>
          </div>
        </div>

        <div className="profile-content-cirle">
          <div className="profile-image">
            <img src={ME} alt="" />
          </div>
        </div>
      </div>
      <Technologies />
    </section>
  );
}
export default Header;
