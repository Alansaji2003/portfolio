/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/background.jpg";

const imageAltText = "set of rocks";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Side Swipe Javascipt Game",
    description:
      "made sideswipe game with vanilla javascript with the help of freeCodeCamp",
    url: "https://alansaji2003.github.io/javascript-game/",
  },
  {
    title: "Web Development",
    description:
      "Done many small projects on web development in 100daysofcode challenge",
    url: "https://github.com/Alansaji2003/100-days-of-code",
  },
  {
    title: "Python Projects",
    description: "Doing python projects in 100 days of code challenge",
    url: "https://github.com/Alansaji2003/100daysofpython",
  },
  {
    title: "Machine Learning with R",
    description: "Completed Machine Learning Course with R",
    url: "https://www.udemy.com/certificate/UC-727bcb10-2e03-46fc-9f4f-b5685e060433/",
  },
  {
    title: "Other mini projects",
    description: "Other mini projects on web dev and python on my twitter",
    url: "https://twitter.com/AlanSaji2003",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover",animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
