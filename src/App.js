import React, { Component } from 'react';
import './App.css';
import HeroTable from './components/HeroTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroTable />
      </div>
    );
  }
}

export default App;
