import * as React from 'react';

const ViewportContext = React.createContext({
  width: 0,
  height: 0,
});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  },              []);

  return (
    <ViewportContext.Provider value={{
      width,
      height
    }}>
      {children}
    </ViewportContext.Provider>
  );
};

const ViewportConsumer = ViewportContext.Consumer;
export { ViewportContext, ViewportProvider, ViewportConsumer };
