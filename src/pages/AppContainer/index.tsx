import * as React from 'react';

// components
import TopBar from "@components/TopBar";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import PageBottomNavigation from "@components/BottomNavigation";
import {ComponentContext} from "@context/ComponentContext";
import {ComponentRoutes} from "@components/ComponentRoutes";
import HomePage from "@pages/HomePage";
import Footer from "@components/Footer";

// utils
import { useViewport } from "../../hooks";

// interfaces
import {
  AppContainerProps,
  AppContainerState
} from "@pages/AppContainer/interfaces";

// styles
import './AppContainer.scss';
import ErrorBoundary from "@components/ErrorBoundary";
import {Grid, Row} from "@material/react-layout-grid";

const AppContainer: React.FunctionComponent<AppContainerProps> = (props) => {
  const componentContext = React.useContext(ComponentContext);
  const [state, setState] = React.useState<AppContainerState>({
    selectedIndex: 0,
    character: {},
    error: null,
    isLoading: true,
  });

  const { width } = useViewport();
  const breakpoint = 539;

  const { selectedIndex } = componentContext;

  return (
    <div className="container">
      {
        selectedIndex === 0 ? React.createElement(HomePage) :
          <React.Fragment>
            <TopBar/>
              <TopAppBarFixedAdjust>
                <ErrorBoundary>
                  {React.createElement(ComponentRoutes[selectedIndex].component)}
                </ErrorBoundary>
              </TopAppBarFixedAdjust>
            {width < breakpoint && <PageBottomNavigation/>}
            {width > breakpoint && <Footer />}
          </React.Fragment>
      }
    </div>
  )
}

export default AppContainer;
