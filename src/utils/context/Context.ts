import * as React from 'react';

const selectedIndex = JSON.parse(window.localStorage.getItem('selectedIndex'));

export const MenuContext = React.createContext({
  selectedIndex: selectedIndex === null || undefined || false ? 0 : selectedIndex,
  setSelectedIndex: (_selectedIndex: number) => {},
});

export const ViewportContext = React.createContext({
  width: 0,
  height: 0,
});
