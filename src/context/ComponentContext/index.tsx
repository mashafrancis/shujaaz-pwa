import * as React from 'react';

const ComponentContext = React.createContext({
  selectedIndex: 0,
  setSelectedIndex: (_selectedIndex: number) => {},
});

const ComponentProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ComponentContext.Provider value={{
      selectedIndex,
      setSelectedIndex,
    }}>
      {children}
    </ComponentContext.Provider>
  )
}

const ComponentConsumer = ComponentContext.Consumer;
export { ComponentProvider, ComponentConsumer, ComponentContext }
