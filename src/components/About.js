import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin className="icon" />,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/yashwanth-kumar-rangu-b6a3ba228",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="icon" />,
    title: "Github",
    link: "https://github.com",
  },
];

const About = () => {
  return (
    <div className="about-bg-container flex flex-col justify-center" id="about">
      <h1 className="full-name">
        YASHWANTH KUMAR <span className="last-name">RANGU</span>
      </h1>
      <p className="address">
        HYDERABAD, TELANGANA | +91 9492015546 | YASHANTHRANGU99@GMAIL.COM
      </p>

      <p className="summary">
        I'm a front end developer with two years and two months of experience in
        web development. I am experienced in leveraging agile frameworks to
        provide a robust synopsis for high level overviews. Iterative approaches
        to corporate strategy foster collaborative thinking to further the
        overall value proposition. I'm passionate about creating great user
        experiences and have a strong understanding of usability and
        accessibility standards.
      </p>

      <div className="flex flex-row">
        {socialLinks.map((each) => (
          <li key={each.id} className="social-item">
            <a href={each.link} target="_blank" rel="noreferrer">
              <span title={each.title}>{each.icon}</span>
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default About;
