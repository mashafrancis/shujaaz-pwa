// react libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// third party packages
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from './App';
import { CharacterProvider } from "@context/CharacterContext";

ReactDOM.render(
  <CharacterProvider>
    <Router>
      <App />
    </Router>
  </CharacterProvider>,
  document.getElementById('root') || document.createElement('div')
);

