import React, { Component } from 'react';

class Project extends Component {
  render() {
    console.log(this.props.project);
    return (
        <div>
          <a href={this.props.project.link}><h1>{this.props.project.name}</h1>
          <img src={"/images/" + this.props.project.image} alt={this.props.project.name} width="300"/></a>
        </div>
    )
  }
}

export default Project;