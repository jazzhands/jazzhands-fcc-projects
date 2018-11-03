import React, { Component } from 'react';
import Projects from './Projects/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            jazzhands.github.io
          </p>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>blog</li>
          </ul>
        </header>
        <Projects/>
      </div>
    );
  }
}

export default App;
