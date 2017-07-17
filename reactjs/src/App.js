import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My first ReactJs app
        <Projects />
      </div>
    );
  }
}

export default App;
