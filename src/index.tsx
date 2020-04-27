// react libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// third party packages
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root') || document.createElement('div')
);

serviceWorker.register();
