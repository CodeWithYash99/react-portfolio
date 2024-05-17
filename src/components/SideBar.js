import React from "react";
import { Link } from "react-scroll";

const tabItemsData = [
  { id: 1, name: "ABOUT", link: "about" },
  { id: 2, name: "EXPERIENCE", link: "experience" },
  { id: 3, name: "EDUCATION", link: "education" },
  { id: 4, name: "SKILLS", link: "skills" },
  { id: 5, name: "PROJECTS", link: "projects" },
  { id: 6, name: "INTERESTS", link: "interests" },
  { id: 7, name: "CONTACT", link: "contact" },
];

const SideBar = () => {
  return (
    <div className="side-bar-bg-container flex flex-col justify-center items-center">
      <div className="profile-circle flex flex-col justify-center items-center">
        <img
          className="profile-picture"
          src="https://res.cloudinary.com/ddysg5sb8/image/upload/v1715924459/Profile%20Photo/Crop_-_1_b1c4on.png"
          alt="Profile"
        />
      </div>

      <ul className="list-items flex flex-col items-center">
        {tabItemsData.map((each) => (
          <li key={each.id} className="list-item text-center">
            <Link to={each.link} spy={true} smooth={true} duration={1000}>
              {each.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
