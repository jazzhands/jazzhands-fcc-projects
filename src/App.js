import React, { Component } from 'react';
import Projects from './Projects/Projects';
import './App.css';
import Welcome from './Portfolio/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
        <Projects/>
      </div>
    );
  }
}

export default App;
