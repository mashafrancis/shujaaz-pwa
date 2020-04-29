import * as React from 'react';

// components
import Routes from '../routes';
import { ViewportProvider } from "@context/ViewportContext";

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
