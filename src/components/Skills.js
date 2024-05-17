import React from "react";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaNpm } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

const skillsData = [
  { id: 1, icon: <IoLogoHtml5 />, iconColor: "#FF6500", title: "HTML" },
  { id: 2, icon: <IoLogoCss3 />, iconColor: "#10439F", title: "CSS" },
  { id: 3, icon: <FaBootstrap />, iconColor: "#874CCC", title: "Bootstrap" },
  {
    id: 4,
    icon: <RiJavascriptFill />,
    iconColor: "#FDA403",
    title: "JavaScript",
  },
  { id: 5, icon: <FaReact />, iconColor: "#67C6E3", title: "React Js" },
  { id: 6, icon: <TbBrandRedux />, iconColor: "#6420AA", title: "Redux" },
  { id: 7, icon: <FaNpm />, iconColor: "#E72929", title: "NPM" },
];

const workflowData = [
  { id: 1, flow: "Mobile-First, Responsive Design" },
  { id: 2, flow: "Cross Browser Testing & Debugging" },
  { id: 3, flow: "Cross Functional Teams" },
  { id: 4, flow: "Agile Development & Scrum" },
];

const Skills = () => {
  return (
    <div className="skills-bg-container flex flex-col justify-center" id="skills">
      <h1 className="skills-heading">Skills</h1>

      <h2 className="skills-sub-heading">FRONT END LANGUAGES & TOOLS</h2>

      <div className="skills-icons-container flex flex-row">
        {skillsData.map((each) => (
          <span
            className="skill-icon"
            style={{ color: each.iconColor }}
            key={each.id}
            title={each.title}
          >
            {each.icon}
          </span>
        ))}
      </div>

      <h2 className="skills-sub-heading">WORKFLOW</h2>

      {workflowData.map((each) => (
        <li className="workflow-list-item" key={each.id}>
          <div className="flex flex-row items-center">
            <MdDone className="workflow-icon" />
            <span className="work-flow-item">{each.flow}</span>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Skills;
