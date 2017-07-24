import React, { Component } from 'react';
import logo from './logo.svg';
import solarimg from './solar4.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="solarimage">
                  <img src={solarimg} className="solarimg" alt="solar panel logo" width="100%" />
            </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to re-load.
        </p>
      </div>
    );
  }
}

export default App;
