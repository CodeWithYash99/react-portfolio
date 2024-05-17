import React from "react";

const experienceData = [
  {
    id: 1,
    designation: "Software Engineer",
    duration: "January 2022 - Present",
    company: "Tata Consultancy Services",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
  },
  {
    id: 2,
    designation: "Quality Analyst",
    duration: "January 2021 - October 2021",
    company: "Apex CoVantage India Pvt. Ltd",
    description:
      "Crucial position within any organization focused on maintaining and improving the quality of products, services, and processes. This role involves diverse duties and responsibilities to ensure that all aspects of production meet or exceed established quality standards. The primary goal of a QA is to identify areas that need to be improved and work towards enhancing the overall quality, ensuring customer satisfaction and compliance with regulatory standards.",
  },
];

const Experience = () => {
  return (
    <div
      className="experience-bg-container flex flex-col justify-center"
      id="experience"
    >
      <h1 className="experience-heading">EXPERIENCE</h1>

      {experienceData.map((each) => (
        <li className="experience-list-item" key={each.id}>
          <div className="flex flex-row justify-between">
            <h2 className="designation">{each.designation}</h2>
            <p className="duration">{each.duration}</p>
          </div>
          <p className="organisation">{each.company}</p>
          <p className="description">{each.description}</p>
        </li>
      ))}
    </div>
  );
};

export default Experience;
