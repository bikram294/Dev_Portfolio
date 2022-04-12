import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "ShopO",
    github: "https://github.com/bikram294/React_project_final",
    demo: "https://github.com/bikram294/React_project_final",
  },
  {
    id: 2,
    image: IMG2,
    title: "Food Engine",
    github: "https://github.com/bikram294/Food_Engine",
    demo: "https://bikram294.github.io/Food_Engine/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Expense Tracker",
    github: "https://github.com/bikram294/Expense_Tracker",
    demo: "https://bikram294.github.io/Expense_Tracker/",
  },
  {
    id: 4,
    image: IMG4,
    title: "JARVIS 2.0",
    github: "https://github.com/bikram294/JARVIS_2.0",
    demo: "https://github.com/bikram294/JARVIS_2.0",
  },
  {
    id: 5,
    image: IMG5,
    title: "My Portfolio",
    github: "https://github.com/bikram294/JARVIS_2.0",
    demo: "https://github.com/bikram294/JARVIS_2.0",
  },
  {
    id: 6,
    image: IMG6,
    title: "Simple Portfolio",
    github: "https://github.com/bikram294/Sample_Portfolio_frontend",
    demo: "https://kawaljeet-portfolio.000webhostapp.com/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio (Projects)</h2>

      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn">
                  Github
                </a>
                <a
                  href={item.demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
