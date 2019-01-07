import React, { Component } from 'react';
import ProjectList from '../ProjectList';
import './EmbeddedProject.css';

class EmbeddedProject extends Component {
  render() {
    console.log(this.props.match);
    const { params } = this.props.match;
    const projectName = params.project;
    const project = ProjectList.projects.filter((project) => {return project.link == ("/" + projectName)})[0];
    console.log(project);


    return (
      <div className="embedded-project">
        <iframe id={project.name}
            title={project.name}
            src={"/EmbeddedProjects" + project.link + "/index.html"}
            // srcDoc={"/EmbeddedProjects" + project.link + "/index.html"}
            frameborder="0"
            ></iframe>
      </div>
        

    )
  }
}

export default EmbeddedProject;