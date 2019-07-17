import React from "react";
import { Link } from "react-router-dom";
import projects from "../projects";

class Projects extends React.Component {
  state = {
    projects: projects
  };
  render() {
    const myProjects = this.state.projects;
    return (
      <div>
        <h2>Projects:</h2>
        {myProjects.map(eachProject => {
          return (
            <div key={eachProject.id}>
              <h3>
                <Link to={`/projects/${eachProject.id}`}>
                  {eachProject.name}
                </Link>
              </h3>
              <h4>{eachProject.technologies}</h4>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
