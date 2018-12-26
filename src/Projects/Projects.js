import React, { Component } from 'react';
import ProjectList from '../ProjectList';
import Project from './Project';

class Projects extends Component {
  render() {
    // console.log(ProjectList.projects);
    return (
        <div className="projects">
            <a name="projects"><h1>Projects!</h1></a>
              {ProjectList.projects.map((project, index) => {
                return(<Project project={project} key={index}/>);
                })}
        </div>
    )
  }
}

export default Projects;