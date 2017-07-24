import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/bootstrap.css';
import './css/index.css';
import './css/mysolar.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <MuiThemeProvider>
            <App />
      </MuiThemeProvider>, document.getElementById('root')
);
registerServiceWorker();
