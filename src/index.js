import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './bootstrap.css';
import './index.css';
import './mysolar.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <MuiThemeProvider>
            <App />
      </MuiThemeProvider>, document.getElementById('root')
);
registerServiceWorker();
