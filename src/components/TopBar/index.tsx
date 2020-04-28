import * as React from 'react';

// third-party libraries
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection
} from '@material/react-top-app-bar';
import SearchInput from "@components/SearchBox";

// utils
import { useViewport } from '../../hooks';

// interface
import { TopBarProps } from './interfaces';

export const TopBar: React.FunctionComponent<TopBarProps> = (props) => {

  const { width } = useViewport();
  const breakpoint = 539;

  return (
    <TopAppBar className="dashboard-mobile-nav">
      <TopAppBarRow>
        <TopAppBarSection align="start">
          {(width > breakpoint) &&
          <TopAppBarIcon navIcon tabIndex={0}>
            <ArrowBackRoundedIcon />
          </TopAppBarIcon>}

          <div className="topbar-divider topbar-lockup-divider"/>
          <SearchInput />
          <div className="topbar-divider topbar-lockup-divider"/>
          {(width > breakpoint) &&
          <TopAppBarIcon navIcon tabIndex={0}>
            <ArrowForwardRoundedIcon />
          </TopAppBarIcon>}
        </TopAppBarSection>

      </TopAppBarRow>
    </TopAppBar>
  );
};
