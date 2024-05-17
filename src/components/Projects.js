import React from "react";

const projectsData = [
  {
    id: 1,
    name: "Weather App",
    link: "https://codewithyash99.github.io/weather-app/",
  },
  {
    id: 2,
    name: "QR Code Generator",
    link: "https://codewithyash99.github.io/qr-code-generator/",
  },
  {
    id: 3,
    name: "Fact About Number",
    link: "https://codewithyash99.github.io/fact-about-number/",
  },
  {
    id: 4,
    name: "Counter App",
    link: "https://codewithyash99.github.io/counter-app/",
  },
  {
    id: 5,
    name: "ToDo App",
    link: "https://codewithyash99.github.io/todo-app/",
  },
  {
    id: 6,
    name: "Redux Counter App",
    link: "https://codewithyash99.github.io/redux-counter-app/",
  },
  {
    id: 7,
    name: "Redux ToDo App",
    link: "https://codewithyash99.github.io/redux-todo-app/",
  },
  {
    id: 8,
    name: "Font Lightening Effect",
    link: "https://codewithyash99.github.io/font-lightening-effect/",
  },
  {
    id: 9,
    name: "Credit Card Control",
    link: "https://codewithyash99.github.io/credit-card-control/",
  }
];

const Projects = () => {
  return (
    <div className="projects-bg-container flex flex-col justify-center" id="projects">
      <h1 className="projects-heading">Projects</h1>

      {projectsData.map((each) => (
        <li key={each.id} className="project-list-item">
          <a
            href={each.link}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            {each.name}
          </a>
        </li>
      ))}

      <p className="project-note text-center">* Click on Project Name to see output *</p>
    </div>
  );
};

export default Projects;
