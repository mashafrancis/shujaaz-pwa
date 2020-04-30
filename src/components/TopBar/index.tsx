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
import {CharacterContext} from "@context/CharacterContext";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hideButton: {
      display: 'none'
    }
  }),
);

export default function TopBar() {
  const classes = useStyles();
  const { width } = useViewport();
  const breakpoint = 539;

  const characterContext = React.useContext(CharacterContext);
  const { characterId, setCharacterId } = characterContext;

  return (
    <TopAppBar className="dashboard-mobile-nav">
      <TopAppBarRow>
        <TopAppBarSection align="start">
          {(width > breakpoint) &&
          <TopAppBarIcon navIcon tabIndex={0}>
            <ArrowBackRoundedIcon
              className={(characterId === 1 && classes.hideButton)}
              onClick={() => setCharacterId(parseInt(characterId, 10) - 1)}
            />
          </TopAppBarIcon>}

          <div className="topbar-divider topbar-lockup-divider"/>
          <SearchInput />
          <div className="topbar-divider topbar-lockup-divider"/>
          {(width > breakpoint) &&
          <TopAppBarIcon navIcon tabIndex={0}>
            <ArrowForwardRoundedIcon onClick={() => setCharacterId(parseInt(characterId, 10) + 1)}/>
          </TopAppBarIcon>}
        </TopAppBarSection>

      </TopAppBarRow>
    </TopAppBar>
  );
};
