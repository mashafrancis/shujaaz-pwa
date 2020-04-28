import * as React from 'react';

// components
import { ViewportProvider } from '../hooks';
import Routes from '../routes';

// styles
import './App.scss';

function App() {
  return (
    <ViewportProvider>
      <Routes/>
    </ViewportProvider>
  );
}

export default App;
