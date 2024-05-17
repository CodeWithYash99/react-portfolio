import React from "react";

const educationData = [
  {
    id: 1,
    school: "Amrita Sai Institute of Science and Technology",
    degree: "Bachelor of Technology",
    branch: "Electronics & Communication of Engineering",
    duration: "June 2015 - April 2019",
    score: "70%",
  },
  {
    id: 2,
    school: "Sri Chaitanya Junior College",
    degree: "",
    branch: "Maths, Physics, Chemistry [MPC]",
    duration: "June 2013 - April 2015",
    score: "82.2%",
  },
  {
    id: 3,
    school: "Subhodaya High School",
    degree: "",
    branch: "",
    duration: "June 2012 - April 2013",
    score: "83%",
  },
];

const Education = () => {
  return (
    <div className="education-bg-container flex flex-col justify-center" id="education">
      <h1 className="education-heading">Education</h1>

      {educationData.map((each) => (
        <div className="edu-item" key={each.id}>
          <div className="flex flex-row justify-between">
            <h3 className="education-school">{each.school}</h3>
            <h5 className="education-duration">{each.duration}</h5>
          </div>
          <h4 className="education-degree">{each.degree}</h4>
          <h4 className="education-branch">{each.branch}</h4>
          <h6 className="education-score">Percentage: {each.score}</h6>
        </div>
      ))}
    </div>
  );
};

export default Education;
