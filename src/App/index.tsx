import * as React from 'react';

// components
import Routes from '../routes';
import { ViewportProvider } from "@context/ViewportContext";

// styles
import './App.scss';
import {ComponentProvider} from "@context/ComponentContext";

function App() {
  return (
    <ViewportProvider>
      <ComponentProvider>
        <Routes/>
      </ComponentProvider>
    </ViewportProvider>
  );
}

export default App;
