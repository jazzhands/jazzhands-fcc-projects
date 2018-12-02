import React, { Component } from 'react';
import Projects from './Projects/Projects';
import Navbar from './Portfolio/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Projects/>
      </div>
    );
  }
}

export default App;
