import "./projects.css";

import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    images: IMG1,
    tech: "HTML, CSS, JAVASCRIPT",
    title: "Random Password Generator",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization",
  },
  {
    id: 2,
    images: IMG4,
    tech: "HTML, CSS, JAVASCRIPT, REACT",
    title: "Cloned- React Porfolio",
    github: "https://github.com/Engrfran6/portfolioreact/tree/master",
    demo: "https://engrfran6.github.io/portfolioreact/",
  },
  {
    id: 3,
    images: IMG5,
    tech: "HTML, CSS, JAVASCRIPT",
    title: "Calculator",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization",
  },

  {
    id: 4,
    images: IMG2,
    tech: "HTML, CSS, JAVASCRIPT, REACT",
    title: "Blog Website",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization",
  },

  {
    id: 5,
    images: IMG3,
    tech: "HTML, CSS, JAVASCRIPT, REACT",
    title: "Unit Converter",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization",
  },

  {
    id: 6,
    images: IMG6,
    tech: "HTML, CSS, JAVASCRIPT",
    title: "Url Saver- Chrome Extension",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization",
  },
  // {
  //   id: 7,
  //   images: IMG6,
  //   tech: "HTML, CSS, JAVASCRIPTT",
  //   title: "Black Jack Game",
  //   github: "https://github.com",
  //   demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization",
  // },
  // {
  //   id: 8,
  //   images: IMG6,
  //   tech: "HTML, CSS, JAVASCRIPT",
  //   title: "Basketball Scoreboard",
  //   github: "https://github.com",
  //   demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization",
  // },
];

export default function Projects() {
  return (
    <section id="projects">
      <h5>Projects Done</h5>
      <h2>My Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, images, tech, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_content">
              <div className="portfolio_image">
                <img src={images} alt="" />
                <ul className="tech-used">
                  <li>{tech}</li>
                </ul>

                <h4>{title}</h4>
                <div className="portfolio_link">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
