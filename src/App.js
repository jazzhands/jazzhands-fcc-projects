import React, { Component } from 'react';
import Projects from './Projects/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul className="header-list App-header">
            <li>jazzhands.github.io</li>
            <li className="header-item">home</li>
            <li className="header-item">about</li>
            <li className="header-item">blog</li>
          </ul>
        
        <Projects/>
      </div>
    );
  }
}

export default App;
