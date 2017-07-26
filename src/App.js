import React, { Component } from 'react';
// import logo from './logo.svg';
import solarimg from './images/solar4.min.jpg';
import './css/minify/styles.min.css';
// import './css/index.css';
// import './css/mysolar.css';
// import './css/App.css';

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
