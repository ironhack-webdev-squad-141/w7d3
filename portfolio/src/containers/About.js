import React from "react";
import Experience from "../components/Experience";
import Education from "../components/Education";

const About = () => {
  return (
    <div>
      <div style={{ width: "40%", float: "left" }}>
        <Education />
      </div>
      <div style={{ width: "60%", float: "right" }}>
        <Experience />
      </div>
    </div>
  );
};

export default About;
