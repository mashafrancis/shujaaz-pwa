import * as React from 'react';

// components
import TopBar from "@components/TopBar";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import PageBottomNavigation from "@components/BottomNavigation";

// utils
import { useViewport } from "../../hooks";

// interfaces
import {
  AppContainerProps,
  AppContainerState
} from "@pages/AppContainer/interfaces";

// styles
import './AppContainer.scss';
import SuperHeroPage from "@pages/SuperHeroPage";

const AppContainer: React.FunctionComponent<AppContainerProps> = (props) => {
  const [state, setState] = React.useState<AppContainerState>({
    selectedIndex: 0,
    character: {},
    error: null,
    isLoading: true,
  });

  const { width } = useViewport();
  const breakpoint = 539;

  const setSelectedIndex = (selectedIndex: number) => {
    setState({ ...state, selectedIndex });
    window.localStorage.setItem('selectedIndex', JSON.stringify(selectedIndex));
  };

  const { selectedIndex } = state;

  return (
    <div className="container">
      <TopBar />
      <TopAppBarFixedAdjust>
        <SuperHeroPage />
      </TopAppBarFixedAdjust>
      { width < breakpoint && <PageBottomNavigation/> }
    </div>
  )
}

export default AppContainer;
