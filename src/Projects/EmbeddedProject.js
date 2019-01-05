import React, { Component } from 'react';

class EmbeddedProject extends Component {
  render() {
    console.log(this.props.project);
    return (
        <iframe id={this.props.project.name}
            title={this.props.project.name}
            src={this.props.project.link + "index.html"}
            srcDoc={this.props.project.link + "index.html"}></iframe>

    )
  }
}

export default EmbeddedProject;