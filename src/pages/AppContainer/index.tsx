import * as React from 'react';

// components
import { TopBar } from "@components/TopBar";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import PageBottomNavigation from "@components/BottomNavigation";

// utils
import { useViewport } from "../../hooks";
import { MenuContext } from '@utils/context';

// interfaces
import {
  AppContainerProps,
  AppContainerState
} from "@pages/AppContainer/interfaces";

// styles
import './AppContainer.scss';

const AppContainer: React.FunctionComponent<AppContainerProps> = (props) => {
  const [state, setState] = React.useState<AppContainerState>({
    selectedIndex: 0,
  });

  const { width } = useViewport();
  const breakpoint = 539;

  const setSelectedIndex = (selectedIndex: number) => {
    setState({ ...state, selectedIndex });
    window.localStorage.setItem('selectedIndex', JSON.stringify(selectedIndex));
  };

  const { selectedIndex } = state;

  return (
    <MenuContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
      }}
    >
      <div className="container">
        <TopBar />
        <TopAppBarFixedAdjust>
          {props.component}
        </TopAppBarFixedAdjust>
        { width < breakpoint && <PageBottomNavigation/> }
      </div>
    </MenuContext.Provider>
  )
}

export default AppContainer;
