import React, { Component } from 'react';
import './App.css';
import HeroApp from './components/HeroApp';

class App extends Component {
  render() {
    return (
      <div className="App mx-auto">
        <HeroApp />
      </div>
    );
  }
}

export default App;
