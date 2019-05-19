import React, { Component } from 'react';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="top-level-container" className="container h-screen">
        <Home/>
      </div>
    );
  }
}

export default App;
